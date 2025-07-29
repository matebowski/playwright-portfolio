import { Locator, Page } from "@playwright/test";

export class NavigationBarPage {
  readonly page: Page;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.getByRole("link", { name: "Logout" });
  }

  async clickLogout() {
    await this.logoutLink.click();
  }

  getLoggedInAsText(username: string) {
    return this.page.getByText(`Logged in as ${username}`);
  }
}
