# E2E Test Portfolio (Playwright + TypeScript) 🚀

This repository contains a robust End-to-End test suite for the [Automation Exercise](https://automationexercise.com/) website, built to showcase best practices in test automation.

---

## ✨ Key Features

* **Page Object Model (POM):** Clean separation of page logic from test specs for high maintainability.
* **Data Separation:** Test data and helper functions are isolated from the test logic.
* **Environment-Ready:** Uses `.env` files to manage credentials and configuration.
* **Cross-Browser Testing:** Pre-configured to run tests against Chromium, Firefox, and WebKit.

---

## 🛠️ Tech Stack

* **Framework:** [Playwright](https'://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (strict mode)
* **Code Quality:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
* **Environment:** [Node.js](https://nodejs.org/) (18+) & [NPM](https://www.npmjs.com/)

---

## 🚀 Getting Started

**1. Clone the repository:**
```bash
git clone [https://github.com/matebowski/playwright-portfolio.git](https://github.com/matebowski/playwright-portfolio.git)
cd playwright-portfolio
```

**2. Install dependencies:**
```bash
# Use Clean Install to match the lockfile versions
npm ci
```

**3. Install Playwright browsers:**
```bash
npx playwright install --with-deps
```

**4. Configure environment variables:**
Create a `.env` file by copying `.env.example` and fill in your credentials.
```
E2E_EMAIL=your_email@example.com
E2E_PASSWORD=your_password
BASE_URL=[https://automationexercise.com](https://automationexercise.com)
```

**5. Run the tests!**
```bash
npm test
```
