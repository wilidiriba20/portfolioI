#  Wili Diriba -Portfolio

> A modern, production-style full-stack developer portfolio built with React, Tailwind CSS, and Framer Motion. 
> Designed to showcase scalable architecture, clean UI engineering, and real-world development practices.

---

##  Live Demo
>`https://wilidiriba-portfolio.vercel.app/`


##  Overview

This portfolio is a **developer-focused, modular system** that demonstrates:

- Scalable React architecture
- Centralized data-driven design
- Interactive UI/UX with smooth animations
- Developer Mode (terminal-style interface)
- Production-ready project structure

It is designed not just as a portfolio — but as a **software engineering showcase system**.

---

## Tech Stack

### Frontend
- React (Functional Components + Hooks)
- Tailwind CSS (Utility-first responsive design)
- Framer Motion (Advanced UI animations)

### UI & Tools
- React Icons (Font Awesome, Simple Icons, Tabler Icons)
- Intersection Observer API (Scroll-based interactions)
- Modular reusable components

### Architecture
- Single Source of Truth (`portfolio.js`)
- Component-driven design system
- Scalable folder structure
- Clean separation of UI and data logic

---

## Key Features

### 1. Dual Interface System
- **Standard Portfolio UI**
 - Clean, responsive layout
 - Project showcase cards
 - Skills & certifications sections

- **Developer Mode (CLI Interface)**
 - Terminal-style interactive UI
 - Commands:
   ```
   help
   about
   skills
   projects
   certifications
   contact
   ```
 - Simulates a real developer environment

---

###  2. Smooth Motion & Animations
- Infinite scrolling skill marquee
- Framer Motion page transitions
- Scroll-triggered animations
- Micro-interactions for modern UX feel

---

###  3. Data-Driven Architecture
All content is controlled from a single file:


portfolio.js
Benefits:
Easy updates without touching UI
Scalable project additions
Clean separation of logic and presentation
Faster development workflow

 Project Structure
 ```js
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SkillsSlider.jsx
│   │   ├── Projects.jsx
│   │   ├── DeveloperMode.jsx
│   │   └── SectionHeader.jsx
│   │
│   ├── data/
│   │   └── portfolio.js     # Central configuration layer
│   │
│   ├── App.jsx              # Main application logic
│   └── main.jsx             # Entry point
│
├── package.json
└── README.md
```
# Getting Started
1. Clone the repository
git clone https://github.com/wilidiriba20/portfolioI.git
cd portfolio
2. Install dependencies
npm install
3. Run development server
npm run dev
4. Build for production
npm run build


