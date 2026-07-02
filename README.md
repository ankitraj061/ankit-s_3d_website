# Ankit Raj Portfolio

An interactive developer portfolio built with Next.js, React, Tailwind CSS, and Three.js.
The site showcases my profile, skills, experience, education, and projects with a 3D landing experience and a working contact form.

## Live Website

[https://ankitraj.fun/](https://ankitraj.fun/)

## Features

- 3D hero section using `@react-three/fiber` and `three`
- Animated 3D models (island, bird, plane, fox, sky)
- Multi-page routing with the Next.js App Router (`/`, `/about`, `/projects`, `/contact`)
- Work experience and education timeline
- Skills and interests showcase
- Projects grid with GitHub/live links
- Contact form integrated with EmailJS
- Responsive design for mobile and desktop

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- EmailJS (`@emailjs/browser`)
- Lucide React icons

> Note: the dev/build scripts pin the classic webpack bundler (`next dev/build --webpack`) instead of Turbopack — the current Turbopack build has a bundling bug with `@react-three/fiber`'s error-boundary class that breaks unrelated routes.

## Project Structure

```txt
.
├── public/
│   ├── icons/            # skill/social icons
│   ├── images/           # project & timeline images
│   ├── models/            # 3D models (.glb)
│   └── sakura.mp3
├── src/
│   ├── app/
│   │   ├── layout.jsx           # root layout (Navbar, metadata, globals.css)
│   │   ├── page.jsx              # Home (client-only 3D scene)
│   │   ├── globals.css
│   │   └── (main)/                # route group with shared Footer
│   │       ├── layout.jsx
│   │       ├── about/page.jsx
│   │       ├── projects/page.jsx
│   │       └── contact/page.jsx
│   ├── assets/           # icon/image path constants (files live in public/)
│   ├── components/       # shared UI components (HomeScene, ContactScene, Timeline, etc.)
│   ├── constants/        # skills, projects, social links, timeline data
│   ├── hooks/            # custom hooks (alert handling)
│   ├── models/           # 3D model wrappers/components
│   └── lib/
├── next.config.js
├── package.json
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app is served at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in the project root and add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These are required for the Contact page form submission (the `NEXT_PUBLIC_` prefix is required by Next.js to expose a variable to the browser).

## Deployment

This project is set up for zero-config deployment on Vercel — Next.js is auto-detected.

General deployment flow:

1. Push code to GitHub.
2. Import the repository in Vercel.
3. Add the required EmailJS environment variables in Vercel Project Settings.
4. Deploy.

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - start the production server (after `build`)
- `npm run lint` - run ESLint

## Author

Ankit Raj  
- Portfolio: [https://ankitraj061.vercel.app/](https://ankitraj061.vercel.app/)
- GitHub: [https://github.com/ankitraj061](https://github.com/ankitraj061)
- LinkedIn: [https://www.linkedin.com/in/ankitraj061](https://www.linkedin.com/in/ankitraj061)
