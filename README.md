# Anes Portfolio (GitHub Pages Ready)

This project is a flat static website setup. You can copy all files directly into your GitHub repository root and deploy.

## Structure
- Main page: `index.html`
- Demo pages are root files:
  - `sttrop-index.html`
  - `hotel-index.html`
  - `restaurant-demo-index.html`
  - `cafeteria-index.html`
  - `rentcar-index.html`

No subfolders are required for routing.

## Deploy to GitHub Pages (`anesm-dev.github.io`)
1. Create a GitHub repository named exactly `anesm-dev.github.io`.
2. Copy all files from this folder into the repository root.
3. Commit and push to the `main` branch.
4. Go to GitHub `Settings -> Pages`.
5. Set source to `Deploy from a branch`, then choose `main` and `/ (root)`.

Live URL:
- `https://anesm-dev.github.io/`

## Post-Deploy Checklist
- Home loads at `https://anesm-dev.github.io/`
- Project cards open expected links and demos
- `404.html` redirects to home
- `robots.txt` is accessible
- `sitemap.xml` includes all published pages
- Contact form submits via Formspree

## Notes
- `.nojekyll` is included to keep GitHub Pages static processing simple.
- `.gitignore` excludes editor and local artifact files (`.idea`, `.vscode`, `.sixth`, logs, etc.).