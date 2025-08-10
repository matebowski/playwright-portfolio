# Playwright + TypeScript Portfolio

E2E suite demonstrating Playwright best practices (POM, multi-browser, strict TS, lint/format, debugging).

## Requirements

- Node 18+, npm 9+
- Playwright browsers: `npx playwright install --with-deps`

## Quick start

```bash
npm ci
npm test
```

## Useful scripts

- `npm test` – run all tests (Chromium/Firefox/WebKit)
- `npm run test:ui` – Playwright UI mode
- `npm run test:debug` – inspector (`PWDEBUG=1`)
- `npm run typecheck` – TypeScript strict check
- `npm run lint` / `npm run format` – ESLint (flat v9) + Prettier

## Project structure

```
pages/                # Page Objects
tests/                # Specs
helpers/              # Test utilities
test-data/            # Fixtures/data
playwright.config.ts  # Projects, timeouts, baseURL, reporters
eslint.config.mjs     # ESLint v9 flat config (TS + Playwright)
tsconfig.json         # TypeScript (strict)
```
