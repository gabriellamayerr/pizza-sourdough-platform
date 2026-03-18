System Architecture — pizza-sourdough-platform

Overview

This repository implements the "Sourdough and Pizza Bakery" platform with three main areas:

- Frontend — React app (or minimal HTML/JS) serving the UI
- Backend — Node.js + Express API serving recipes and auth
- Automation — WebdriverIO + Cucumber BDD, Axios API tests, Allure reporting

ASCII diagram

   ┌───────────────────────────┐
   │        GitHub Repo        │
   │ pizza-sourdough-platform  │
   └─────────────┬─────────────┘
                 │
      ┌──────────┼──────────┐
      │          │          │
      ▼          ▼          ▼

┌────────────┐ ┌────────────┐ ┌────────────────┐
│ Frontend   │ │ Backend    │ │ Automation     │
│ React App  │ │ Express API│ │ WebdriverIO +  │
└────────────┘ └────────────┘ │ Cucumber + API  │
                             └────────────────┘

Components and mapping

- Frontend
  - src/components/
    - Navbar.jsx — top navigation
    - ProductCard.jsx — recipe card
    - SearchBar.jsx — search input
  - src/pages/
    - Home.jsx — landing page
    - Shop.jsx — recipes listing
    - Login.jsx — auth page
    - Account.jsx — user profile
  - src/api/api.js — client-side API calls using `fetch`/`axios`
  - public/index.html — app entry
  - package.json — frontend scripts (start/build)

- Backend (Express)
  - backend/server.js — Express app, static serving for frontend
  - backend/controllers/
    - auth.controller.js
    - products.controller.js
  - backend/routes/
    - api.js (mounts /api/*)
  - backend/data/
    - products.json (or MongoDB connection from `backend/config/mongo.js`)
  - package.json — backend scripts (start, dev)

- Automation
  - wdio.conf.js — WebdriverIO configuration (Allure reporter enabled)
  - wdio.appium.conf.js — placeholder Appium config for mobile
  - features/ — Cucumber feature files
    - login.feature
    - shop.feature
    - search.feature
    - ui.feature (existing)
  - features/step-definitions/ — step impls
    - login.steps.js
    - shop.steps.js
    - search.steps.js
    - ui.steps.js (existing)
  - test/api/ — Axios-based API tests
    - auth.api.test.js
    - products.api.test.js (existing `test/api/axios.test.js`)
  - test/pom/ — Page Object Model
    - base.page.js
    - login.page.js
    - shop.page.js
    - account.page.js
  - reporters/
    - allure-results/ (generated)

CI / GitHub Actions

- .github/workflows/ci.yml
  - checkout, setup-node
  - install dependencies
  - start backend server
  - run API tests (Axios)
  - run WDIO tests (headless via `HEADLESS=1`)
  - upload `allure-results` as artifact

Data storage choices

- JSON: lightweight, local `backend/data/*.json` great for prototyping/demo
- MongoDB: replace JSON data layer with `mongoose` and `backend/config/mongo.js` for production-like persistence

How the pieces interact

- Frontend calls Backend REST API endpoints (/api/recipes, /api/login) via `api.js`.
- Backend serves static frontend files in production and exposes API endpoints.
- Automation validates user flows with WebdriverIO/Cucumber and validates APIs with Axios tests.
- All runs produce `allure-results` which CI archives and can publish via `allure` CLI.

Deployment notes

- Simple deploy: host backend on Node host (Heroku/Render/VPS) and serve built frontend from backend static folder or S3 + CloudFront.
- CI builds frontend (`npm run build`) and deploys artifacts.

Next steps I can take for you

- Scaffold a minimal React `frontend/` skeleton with components and pages.
- Move existing `public/` UI into the React app and wire `api.js` to backend.
- Add POM files and additional Cucumber features/steps.
- Replace JSON storage with MongoDB and add connection helpers.

Commands to run locally

Start backend (dev):

```bash
# from repo root
node server.js
# or if backend subproject
cd backend && npm start
```

Run API tests:

```bash
npm run test:api
```

Run e2e (WDIO):

```bash
npm run test:e2e
```

Generate Allure report:

```bash
npm run allure:generate && npm run allure:open
```

File tree (high-level)

```
/ (repo root)
├─ ARCHITECTURE.md
├─ package.json
├─ server.js (root-express)
├─ backend/
│  ├─ package.json
│  └─ server.js
├─ frontend/  (React app or static site)
│  ├─ package.json
│  └─ src/
├─ features/
│  ├─ example.feature
│  └─ ui.feature
├─ features/step-definitions/
├─ test/
│  └─ api/axios.test.js
├─ wdio.conf.js
└─ .github/workflows/ci.yml
```

If you'd like, I can now scaffold the React `frontend/` skeleton and create the controllers/routes for the backend, plus POM placeholders and CI improvements. Which items should I generate next? (I can do all of them incrementally.)
