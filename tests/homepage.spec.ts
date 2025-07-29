import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  const consentButton = page.getByRole("button", { name: "Consent" });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }
});

test("Verify Home Page title", async ({ page }) => {
  await expect(page).toHaveTitle("Automation Exercise");
});
