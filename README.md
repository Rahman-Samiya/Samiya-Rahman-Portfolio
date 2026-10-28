# Samiya Rahman — Portfolio

Personal portfolio website for **Samiya Rahman**, a Full Stack Developer and AI/ML Engineer. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Type-checks with `tsc --noEmit` and outputs optimized assets to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx        # Main application & section components
├── data.ts        # All portfolio content (profile, projects, etc.)
├── Contact.tsx    # Contact form component
├── main.tsx       # Entry point
└── index.css      # Global styles
public/
├── samiya.jpg     # Portrait image
└── Samiya_Rahman_CV.pdf
```

## Content Management

All portfolio content lives in `src/data.ts`. Edit it to update:

- Profile info, intro, about paragraphs, interests
- Skills, projects, research, experience, education
- Competitive programming, leadership, awards

### CV

Replace `public/Samiya_Rahman_CV.pdf` (keep the same filename) or update `profile.cv` in `src/data.ts`.

### Live Demos

Add `demo: 'https://…'` to a project in `src/data.ts` only once the demo URL is verified.

## Contact Form

Without configuration, the form opens a pre-filled email (mailto) and informs the user. For direct delivery:

1. Create a form at [formspree.io](https://formspree.io).
2. Copy `.env.example` to `.env`.
3. Set `VITE_FORMSPREE_ID` to your Formspree form ID.
4. On Vercel, add the same variable under Settings → Environment Variables.

## Deployment

1. Push the repository to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (auto-detected).
4. Deploy.

## License

© Samiya Rahman. All rights reserved.