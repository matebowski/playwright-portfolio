import { expect, test } from "@playwright/test";
import { acceptCookiesIfPresent } from "../helpers/cookies";
import { SignUpLoginPage } from "../pages/SignUpLoginPage";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await acceptCookiesIfPresent(page);
});

test("Login with .env credentials", async ({ page }) => {
  const signUpPage = new SignUpLoginPage(page);

  await expect(signUpPage.loginToYourAccountHeader).toBeVisible();

  const email = process.env.E2E_EMAIL;
  const password = process.env.E2E_PASSWORD;
  if (!email || !password) {
    throw new Error("E2E_EMAIL / E2E_PASSWORD not set in .env");
  }

  await signUpPage.login(email, password);
});
