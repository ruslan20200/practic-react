# Ruslan's portfolio

A responsive personal portfolio built with React and Vite.

## Project structure

- `src/App.jsx` composes the page from `Header`, `Main`, and `Footer`.
- `src/components/` contains the separate page components.
- `src/data/content.js` holds the text, navigation, skills, and project details.
- `src/App.css` and `src/index.css` contain the page and global styles.

To update the displayed text, edit `src/data/content.js`.

## Run locally

```sh
npm ci
npm run dev
```

## Publish

Pushing to `main` runs `.github/workflows/deploy.yml`, builds the site, and deploys
it to GitHub Pages at <https://ruslan20200.github.io/practic-react/>.
