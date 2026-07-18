import { cn } from "@/utils/cn";
import BodyText from "./BodyText";
import Heading from "./Heading";

const alignment = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className={cn("flex flex-col gap-3", alignment[align] || alignment.left, className)}>
      {eyebrow && (
        <span
          className={cn(
            "font-inter text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--color-information)]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </span>
      )}
      {title && <Heading as={as} size="section" align={align} className={titleClassName}>{title}</Heading>}
      {description && <BodyText align={align} className={descriptionClassName}>{description}</BodyText>}
    </div>
  );
}
