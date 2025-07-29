import { expect, test } from "@playwright/test";
import { AccountInformationPage } from "../pages/AccountInformationPage";
import { SignUpLoginPage } from "../pages/SignUpLoginPage";
import { generateUniqueUser } from "../helpers/user-generator";
import { defaultRegistrationData } from "../test-data/user-data";
import { NavigationBarPage } from "../pages/NavigationBarPage";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  const consentButton = page.getByRole("button", { name: "Consent" });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }
});

test("Login verification", async ({ page }) => {
  const accountInformationPage = new AccountInformationPage(page);
  const signUpPage = new SignUpLoginPage(page);
  const navigationBar = new NavigationBarPage(page);

  const newUser = generateUniqueUser();
  await signUpPage.signUp(newUser.name, newUser.email);
  await accountInformationPage.fillForm(defaultRegistrationData);
  await accountInformationPage.clickCreateAccount();
  await accountInformationPage.clickContinue();

  await navigationBar.clickLogout();

  await expect(signUpPage.loginToYourAccountHeader).toBeVisible();

  await signUpPage.login(newUser.email, defaultRegistrationData.password);
  await expect(navigationBar.getLoggedInAsText(newUser.name)).toBeVisible();
});
