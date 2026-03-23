# BULSU COE Web Engineering Project

Multi-group collaboration website with:

- Landing page sections assigned per group
- Per-department pages loaded from department defaults plus published server overrides
- Per-department admin editor (`/dept/:deptCode/admin`) with live preview + server-backed persistence

## Development

```bash
npm install
npm run server
npm run dev
```

The Vite frontend runs on `http://localhost:5173` and the admin API runs on
`http://localhost:3001` by default.

## Build

```bash
npm run build
```

## Admin Persistence

- Published landing and department content is stored in SQLite through the Node
  API in `server/index.js`
- Draft edits still autosave in browser storage to preserve the current live
  preview behavior
- Admin credentials and sessions are now server-backed instead of browser-only

Create a local `.env` from `.env.example` if you want to override the default
SQLite path, API origin, or port.

## Routes

- `/` Landing page
- `/admin` Landing admin editor
- `/departments` Department selector
- `/dept/:deptCode` Department page
- `/dept/:deptCode/admin` Department admin editor

## Content Files

- Landing: `src/data/landing.ts`
- Departments: `public/data/departments/*.json`

## Collaboration Setup

See [docs/PROJECT_WORKFLOW.md](docs/PROJECT_WORKFLOW.md).
For per-department TSX customization, see [docs/DEPARTMENT_PAGE_CUSTOMIZATION.md](docs/DEPARTMENT_PAGE_CUSTOMIZATION.md).
