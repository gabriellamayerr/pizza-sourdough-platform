# Sourdough and Pizza Bakery

Starter repo for QA automation projects and samples.

## Scripts
# QA Automation Portfolio

A collection of test automation examples and a sample full-stack "Sourdough & Pizza" project.

**Project Structure**
- **backend/**: Node + Express API and static server. Entry: `backend/server.js`. Data files: `backend/data/*.json`.
- **frontend/**: Vite + React app. Use `npm --prefix frontend run dev` to start development server.
- **test/**: Automation and test scripts (WebdriverIO+Cucumber features, Axios API tests).
- Root `package.json`: convenience scripts to start backend and frontend.

Start the backend: `npm run start` or `npm run start:backend`
Start the frontend dev server: `npm run start:frontend`

Run API tests: `npm run test:api` (ensure backend is running)
Run E2E tests: `npm run wdio` (ensure backend and/or frontend are available)
