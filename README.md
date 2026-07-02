# Zylxy Technologies Website

Official corporate website for Zylxy Technologies built using Next.js and modern frontend architecture.

---

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- PostCSS
- ESLint

---

## Features

- Modern responsive UI
- Dynamic routing with App Router
- Service detail pages
- Case studies section
- Training modules
- Career opportunities pages
- HubSpot consulting section
- Reusable component architecture
- Modular styling system
- SEO-friendly structure
- Scalable frontend architecture

---

## Project Structure

```bash
zylxytechnology-zylxy-technologies-website/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── favicon_io/
│   └── site.webmanifest
├── public/
│   └── favicons/
│       └── site.webmanifest
├── src/
│   ├── actions/
│   │   └── leadActions.js
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   ├── page.js
│   │   ├── api/
│   │   │   ├── lead/
│   │   │   │   └── route.js
│   │   │   └── talent/
│   │   │       └── route.js
│   │   ├── careers/
│   │   │   ├── explore-opportunities/
│   │   │   │   └── page.jsx
│   │   │   └── talent-acquisition/
│   │   │       └── page.jsx
│   │   ├── context/
│   │   │   └── TalentEcosystemContext.jsx
│   │   ├── hubspot/
│   │   │   ├── layout.jsx
│   │   │   ├── page.jsx
│   │   │   ├── components/
│   │   │   │   ├── features/
│   │   │   │   │   ├── HubSpot-FeaturedProjects.jsx
│   │   │   │   │   └── HubSpot-IntroFeature.jsx
│   │   │   │   ├── forms/
│   │   │   │   │   └── consultationForm.jsx
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Hubspot-Footer.jsx
│   │   │   │   │   └── HubSpot-Navbar.jsx
│   │   │   │   └── sections/
│   │   │   │       ├── Hubspot-faq.jsx
│   │   │   │       ├── Hubspot-Hero.jsx
│   │   │   │       ├── HubSpot-StatsBar.jsx
│   │   │   │       ├── Hubspot-Testimonials.jsx
│   │   │   │       └── HubSpot-WhyMe.jsx
│   │   │   ├── data/
│   │   │   │   ├── features/
│   │   │   │   │   ├── FeaturedProjects.js
│   │   │   │   │   └── introFeatures.js
│   │   │   │   ├── forms/
│   │   │   │   │   └── consultationFormData.js
│   │   │   │   ├── layout/
│   │   │   │   │   ├── footer.js
│   │   │   │   │   └── navigation.js
│   │   │   │   ├── packages/
│   │   │   │   │   └── packageData.js
│   │   │   │   └── sections/
│   │   │   │       ├── consultation.js
│   │   │   │       ├── faq.js
│   │   │   │       ├── heroData.js
│   │   │   │       ├── Hubspot-Data.js
│   │   │   │       ├── statsData.js
│   │   │   │       ├── testimonials.js
│   │   │   │       └── why-me.js
│   │   │   ├── packages/
│   │   │   │   ├── HubSpot-PackagesOverview.jsx
│   │   │   │   ├── layout.jsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.jsx
│   │   │   └── styles/
│   │   │       ├── features/
│   │   │       │   ├── featuredProjects.js
│   │   │       │   └── introFeature.js
│   │   │       ├── forms/
│   │   │       │   └── consultationFormStyles.js
│   │   │       ├── layout/
│   │   │       │   ├── footer.js
│   │   │       │   └── navbar.js
│   │   │       ├── packages/
│   │   │       │   ├── packageDetail.js
│   │   │       │   └── packagesOverview.js
│   │   │       └── sections/
│   │   │           ├── challenges.js
│   │   │           ├── faq.js
│   │   │           ├── hero.js
│   │   │           ├── statsBar.js
│   │   │           ├── testimonials.js
│   │   │           └── whyMe.js
│   │   └── services/
│   │       ├── page.jsx
│   │       └── [slug]/
│   │           ├── layout.jsx
│   │           └── page.jsx
│   ├── components/
│   │   ├── forms/
│   │   │   └── LeadForm.jsx
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── ClientsSection.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── FooterSection.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── IndustriesSection.jsx
│   │   │   ├── LeadershipSection.jsx
│   │   │   ├── PortfolioShowcase.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/
│   │       ├── NoiseReveal.jsx
│   │       ├── PageTransition.jsx
│   │       ├── SmoothScrollLink.jsx
│   │       └── Spinner.jsx
│   ├── data/
│   │   ├── forms/
│   │   │   └── LeadFormData.js
│   │   ├── layout/
│   │   │   ├── footerData.js
│   │   │   └── navigationData.js
│   │   └── sections/
│   │       ├── caseStudiesData.js
│   │       ├── clientsData.js
│   │       ├── explore-opportunities.js
│   │       ├── faqData.js
│   │       ├── heroData.js
│   │       ├── industriesData.js
│   │       ├── leadershipData.js
│   │       ├── seoData.js
│   │       ├── servicesData.js
│   │       ├── talent-acquisition.js
│   │       └── testimonialsData.js
│   ├── lib/
│   │   ├── metadata.js
│   │   ├── routes.js
│   │   ├── seo.js
│   │   └── siteConfig.js
│   ├── styles/
│   │   ├── animations.css
│   │   ├── explore-opportunities.js
│   │   ├── talent-acquisition.js
│   │   ├── forms/
│   │   │   └── leadFormStyles.js
│   │   ├── layout/
│   │   │   ├── footer.js
│   │   │   ├── navbar.dark.js
│   │   │   └── navbar.mobile.js
│   │   └── sections/
│   │       ├── caseStudies.js
│   │       ├── clients.js
│   │       ├── faq.js
│   │       ├── hero.js
│   │       ├── industries.js
│   │       ├── leadership.js
│   │       ├── services.js
│   │       └── testimonials.js
│   └── utils/
│       └── cn.js
└── .github/
    └── workflows/
        └── nextjs.yml
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/zylxy-technologies-website.git
```

Move into the project directory:

```bash
cd zylxy-technologies-website
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

---

## Start Production Server

```bash
npm start
```

---

## Git Workflow

Check changes:

```bash
git status
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "your commit message"
```

Push to GitHub:

```bash
git push origin main
```

---

## Recommended .gitignore

```gitignore
node_modules
.next
.env
dist
build
```

---

## Deployment

Recommended deployment platforms:

- Vercel
- Netlify

---

## Author

Zylxy Technologies
