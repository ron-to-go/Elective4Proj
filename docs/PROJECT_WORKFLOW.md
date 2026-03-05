# Web Engineering Collaboration Workflow

Use this workflow so multiple groups can work in parallel with minimal merge conflicts.

## 1) Branch Strategy

Use `main` as integration baseline.

### Landing branches

- `landing/hero`
- `landing/mission-vision`
- `landing/department-grid`
- `landing/news`
- `landing/facilities`
- `landing/statistics`
- `landing/contact`
- `landing/footer`

### Department branches

- `dept/CE`
- `dept/CPE`
- `dept/ECE`
- `dept/EE`
- `dept/IE`
- `dept/MFE`
- `dept/ME`
- `dept/MEE`

## 2) Source-Of-Truth Files

Content is now file-based and shareable via git.

### Landing content

Landing content is centralized in one file:

- `src/data/landing.ts`

Each landing branch edits only its own block inside this file.

### Department content

Each department has one JSON file in `public/data/departments/`:

- `CE.json`, `CPE.json`, `ECE.json`, `EE.json`, `IE.json`, `MFE.json`, `ME.json`, `MEE.json`

Each department also has its own page file in `src/Pages/departments/`:

- `CE.tsx`, `CPE.tsx`, `ECE.tsx`, `EE.tsx`, `IE.tsx`, `MFE.tsx`, `ME.tsx`, `MEE.tsx`

## 3) Scope Rules

- Landing teams edit only their assigned JSON file and section assets.
- Department teams edit only their department JSON file, their own department TSX page file, and department-specific assets.
- Avoid editing shared React files unless explicitly requested by maintainer.

## 4) Merge Flow

1. Branch from `main`.
2. Commit only files in your scope.
3. Open PR to `main`.
4. Resolve conflicts immediately if scope was violated.
5. Keep commits short and focused.

## 5) Admin Editor Usage

Route: `/dept/<CODE>/admin`

- Form edits are local for preview/testing.
- Use **Download `<CODE>.json`** or **Copy JSON**.
- Replace `public/data/departments/<CODE>.json` with exported content.
- Commit and push that JSON file.

## 6) Required Department Sections

1. Program Overview
2. Program Educational Objectives (PEO)
3. Student Outcomes (SO)
4. Curriculum Overview
5. Laboratories
6. Faculty
7. Career Opportunities
