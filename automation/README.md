Automation structure for pizza-sourdough-platform

- features/ - Cucumber feature files
- features/step-definitions/ - JS step implementations
- pom/ - Page Object Model
- api/ - Axios API tests
- wdio.conf.js lives at repo root and is configured to pick up features

Run e2e:

npm run test:e2e

API tests:

npm run test:api
