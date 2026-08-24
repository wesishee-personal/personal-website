# personal-website

Personal site for Wes Ishee — [wesishee.com](https://wesishee.com)

Vite + React + TypeScript, hand-written CSS, no framework. Three routes: About
(`/`), Projects (`/projects`), Resume (`/resume`).

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Editing content

Page content lives in `src/data/`, separate from the components that render it:

| File | Holds |
| --- | --- |
| `profile.ts` | Name, title, contact links, About-page bio, resume summary |
| `projects.ts` | Project cards (add `link` to a project to render a link on its card) |
| `experience.ts` | Work history bullets and education |
| `skills.ts` | Skill categories |

The downloadable resume is `public/wes-ishee-resume.pdf` — replace the file to
update it.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes
to GitHub Pages. `public/CNAME` pins the custom domain; the workflow copies
`index.html` to `404.html` so client-side routes survive a hard refresh.
