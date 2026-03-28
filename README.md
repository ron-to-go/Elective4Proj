# PLEASE MAKE SURE TO BE IN A BRANCH OR CREATE ONE WHEN TRYING CI/CD TO SEE THE ERROR LOGS IN THE PULL REQUESTS



# BULSU COE Web Engineering Project

Multi-group collaboration website with:

- Landing page sections assigned per group
- Per-department pages loaded from JSON files in `public/data/`
- Per-department admin editor (`/dept/:deptCode/admin`) with live preview + JSON export

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

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

