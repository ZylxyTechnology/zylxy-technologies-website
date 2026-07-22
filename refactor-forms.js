const fs = require('fs');
const path = require('path');

const files = [
  "src/components/forms/software-development/app-maintenance.jsx",
  "src/components/forms/software-development/brand-design.jsx",
  "src/components/forms/software-development/custom-software.jsx",
  "src/components/forms/software-development/mobile-form.jsx",
  "src/components/forms/software-development/ui-ux-design.jsx",
  "src/components/forms/software-development/web-form.jsx",
  "src/components/forms/ai-crm-solutions/ai-automation.jsx",
  "src/components/forms/training-placement/TrainingPlacement.jsx",
  "src/app/hubspot/components/forms/consultationForm.jsx"
];

for (const file of files) {
  const fullPath = path.resolve(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${file} - not found`);
    continue;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // 1. Add isEmbedded to props
  content = content.replace(
    /export default function ([A-Za-z0-9_]+)\(\) \{/,
    'export default function $1({ isEmbedded = false }) {'
  );

  // 2. Wrap the form in formContent
  // We need to match the return block. The forms usually start with return (<section ... > ... )
  // and have `{!isSuccess ? ( <form ...> ... </form> ) : ( <div className={s.successCard}> ... </div> )}`
  
  const returnIndex = content.indexOf('return (');
  if (returnIndex !== -1) {
    const returnBlock = content.substring(returnIndex);
    
    // Extract the form block starting from `{!isSuccess` or similar
    const formStartMatch = returnBlock.match(/\{\s*!isSuccess\s*\?/);
    if (!formStartMatch) {
       console.log(`Could not find !isSuccess logic in ${file}`);
       continue;
    }
    
    const formStartIndex = returnBlock.indexOf(formStartMatch[0]);
    // It ends right before the last closing tags: </div></section>);
    const formEndIndex = returnBlock.lastIndexOf('</section>');
    
    if (formStartIndex !== -1 && formEndIndex !== -1) {
       let formJSX = returnBlock.substring(formStartIndex, formEndIndex);
       // Remove trailing </div> that belong to wrapper
       formJSX = formJSX.replace(/<\/div>\s*$/, '');
       
       // Modify formJSX to conditionalize the card classes
       let modifiedFormJSX = formJSX.replace(
         /className=\{s\.formCard\}/g,
         'className={isEmbedded ? "" : s.formCard}'
       ).replace(
         /<div className=\{s\.formAccentBar\} \/>/g,
         '{!isEmbedded && <div className={s.formAccentBar} />}'
       ).replace(
         /className=\{s\.successCard\}/g,
         'className={isEmbedded ? "" : s.successCard}'
       );
       
       const sectionIdMatch = returnBlock.match(/<section id="([^"]+)"/);
       const sectionId = sectionIdMatch ? sectionIdMatch[1] : "Section";

       const replacement = `const formContent = (
    <>
      ${modifiedFormJSX}
    </>
  );

  if (isEmbedded) return formContent;

  return (
    <section id="${sectionId}" className={s.section}>
      <div className={s.backgroundEffects} />
      <div className={s.radialGlow} />
      <div className={s.wrapper}>
        <div className={s.headerContainer}>
          <div className={s.pillLine}>
            <div className={s.pillLineBar} />
            <span className={s.pillText}>{d.header.pillText}</span>
          </div>
          <h2 className={s.mainHeading}>{d.header.mainHeading}</h2>
          <p className={s.subHeading}>{d.header.subHeading}</p>
        </div>

        {formContent}
      </div>
    </section>
  );`;

       content = content.substring(0, returnIndex) + replacement;
       fs.writeFileSync(fullPath, content);
       console.log(`Successfully refactored ${file}`);
    } else {
       console.log(`Could not find section boundaries in ${file}`);
    }
  } else {
    console.log(`Could not find return statement in ${file}`);
  }
}
