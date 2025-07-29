import { expect, test } from "@playwright/test";
import { generateUniqueUser } from "../helpers/user-generator";
import { AccountInformationPage } from "../pages/AccountInformationPage";
import { SignUpLoginPage } from "../pages/SignUpLoginPage";
import { defaultRegistrationData } from "../test-data/user-data";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  const consentButton = page.getByRole("button", { name: "Consent" });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }
});

test("Create user", async ({ page }) => {
  const accountInformationPage = new AccountInformationPage(page);
  const signUpPage = new SignUpLoginPage(page);

  const newUser = generateUniqueUser();

  await signUpPage.signUp(newUser.name, newUser.email);

  await expect(accountInformationPage.enterAccountInfoHeader).toBeVisible();

  await accountInformationPage.fillForm(defaultRegistrationData);
  await accountInformationPage.clickCreateAccount();

  await expect(accountInformationPage.accountCreatedInfo).toBeVisible();
});
