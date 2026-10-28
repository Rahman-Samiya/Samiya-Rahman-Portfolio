# Samiya Rahman — Portfolio
Run: `npm install && npm run dev` · Build: `npm run build` · Content: edit `src/data.ts`.
**CV:** replace `public/Samiya_Rahman_CV.pdf` (same filename) or change `profile.cv` in `src/data.ts`.
**Contact form:** without config it opens a pre-filled email (mailto) and says so. For direct delivery, create a form at formspree.io, copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID`; on Vercel add the same variable under Settings → Environment Variables.
**Deploy:** push to GitHub → vercel.com → Import → Framework "Vite" (auto) → Deploy.
**Live demos:** add `demo: 'https://…'` to a project in `src/data.ts` only once verified.
