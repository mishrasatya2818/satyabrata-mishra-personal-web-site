# Satyabrata Mishra — personal website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Fully static, zero config on Vercel.

## Edit content
All text lives in **`lib/content.ts`** — experience, case studies, metrics, skills, links.
Replace the résumé at `public/Satyabrata_Mishra_Resume.pdf` to update the download.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Deploy (GitHub → Vercel)
1. Create an empty GitHub repo, then from this folder:
   ```bash
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On vercel.com → **Add New → Project** → import the repo. Framework is auto-detected as Next.js; keep defaults and deploy.
3. Optional: add a custom domain in Vercel, then set env var `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` so sitemap, canonical URL and social previews use it.

Every push to `main` redeploys automatically.
