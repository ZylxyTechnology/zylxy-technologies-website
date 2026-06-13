# Zylxy Technologies Website

Official corporate website for Zylxy Technologies built using Next.js and modern frontend architecture.

---

## Tech Stack

* Next.js
* React
* JavaScript
* Tailwind CSS
* PostCSS
* ESLint

---

## Features

* Modern responsive UI
* Dynamic routing with App Router
* Service detail pages
* Case studies section
* Training modules
* Reusable component architecture
* Modular styling system
* SEO-friendly structure
* Scalable frontend architecture

---

# Project Structure

```bash
.
├── .github/
├── .next/
├── node_modules/
├── out/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── lead/
│   │   │       └── route.js
│   │   ├── services/
│   │   │   └── [slug]/
│   │   │       ├── page.jsx
│   │   │       └── page.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Announcement.jsx
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
│   │   │   ├── LeadGen.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/
│   ├── data/
│   │   ├── caseStudiesData.js
│   │   ├── clientsData.js
│   │   ├── faqData.js
│   │   ├── footerData.js
│   │   ├── heroData.js
│   │   ├── industriesData.js
│   │   ├── leadershipData.js
│   │   ├── leadGenData.js
│   │   ├── navigationData.js
│   │   ├── seoData.js
│   │   ├── servicesData.js
│   │   └── testimonialsData.js
│   ├── lib/
│   │   ├── metadata.js
│   │   ├── routes.js
│   │   ├── seo.js
│   │   └── siteConfig.js
│   ├── styles/
│   │   ├── navbar/
│   │   │   ├── navbar.dark.js
│   │   │   ├── navbar.mega.js
│   │   │   └── navbar.mobile.js
│   │   ├── sections/
│   │   │   ├── caseStudies.js
│   │   │   ├── clients.js
│   │   │   ├── faq.js
│   │   │   ├── footer.js
│   │   │   ├── hero.js
│   │   │   ├── industries.js
│   │   │   ├── leadership.js
│   │   │   ├── leadGen.js
│   │   │   ├── services.js
│   │   │   └── testimonials.js
│   │   └── animations.css
│   └── utils/
│       └── cn.js
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md
```

---

# Installation

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

# Build for Production

```bash
npm run build
```

---

# Start Production Server

```bash
npm start
```

---

# Git Workflow

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

# Recommended .gitignore

```gitignore
node_modules
.next
.env
dist
build
```

---

# Deployment

Recommended deployment platforms:

* Vercel
* Netlify

---

# Author

Zylxy Technologies
