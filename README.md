# Lived Data Collective

Static website for the Lived Data Collective.

## Code map

- `index.html`, `people.html`, `research.html`, `join-us.html`, and `publications.html` contain page structure. The site header is intentionally repeated in each page so the site can be opened directly without a build step; keep its navigation labels and order in sync.
- `styles.css` contains shared tokens and page styles. Sections are organized in page order after the shared foundations.
- `scripts/shared.js` provides the shared header scroll state.
- `scripts/home.js`, `scripts/people.js`, and `scripts/research.js` contain behavior used only by their matching pages.
- `scripts/publications-data.js` is the single source of truth for publication content.
- `scripts/publications.js` renders publication cards, filters, and the featured-work carousel.

## Add A Publication

Add one object to `scripts/publications-data.js`. Provide the title, authors, lab member names, venue, year, type, theme, links, and thumbnail. The publication page derives the featured carousel, archive cards, and filter options from that data automatically.

Use a `paper`, `poster`, `web`, or `video` link type. Empty link URLs render as unavailable placeholders, so they can be added before all materials are published.
