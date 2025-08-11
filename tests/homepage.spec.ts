import { acceptCookiesIfPresent } from "../helpers/cookies";
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  await acceptCookiesIfPresent(page);
});

test("Verify Home Page title", async ({ page }) => {
  await expect(page).toHaveTitle("Automation Exercise");
});
