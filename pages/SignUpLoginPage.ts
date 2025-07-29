import { Locator, Page } from "@playwright/test";

export class SignUpLoginPage {
  readonly page: Page;
  readonly signUpName: Locator;
  readonly signUpEmail: Locator;
  readonly signUpButton: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loginToYourAccountHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpName = this.page.locator('[data-qa="signup-name"]');
    this.signUpEmail = this.page.locator('[data-qa="signup-email"]');
    this.signUpButton = this.page.locator('[data-qa="signup-button"]');
    this.loginEmailInput = this.page.locator('[data-qa="login-email"]');
    this.loginPasswordInput = this.page.locator('[data-qa="login-password"]');
    this.loginButton = this.page.locator('[data-qa="login-button"]');
    this.loginToYourAccountHeader = this.page.getByRole("heading", {
      name: "Login to your account",
    });
  }

  async signUp(name: string, email: string) {
    await this.signUpName.fill(name);
    await this.signUpEmail.fill(email);
    await this.signUpButton.click();
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }
}
