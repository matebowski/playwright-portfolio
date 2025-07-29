import { type Page, type Locator } from "@playwright/test";

export type AccountInfo = {
  password: string;
  day: string;
  month: string;
  year: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

export class AccountInformationPage {
  readonly page: Page;
  readonly mrGenderRadioButton: Locator;
  readonly passwordField: Locator;
  readonly dayOfBirthDropdown: Locator;
  readonly monthOfBirthDropdown: Locator;
  readonly yearOfBirthDropdown: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly addressField: Locator;
  readonly countryDropdown: Locator;
  readonly stateField: Locator;
  readonly cityField: Locator;
  readonly zipcodeField: Locator;
  readonly mobileNumberField: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedInfo: Locator;
  readonly enterAccountInfoHeader: Locator;
  readonly continueButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterAccountInfoHeader = page.getByRole("heading", {
      name: "Enter Account Information",
    });
    this.mrGenderRadioButton = page.getByLabel("Mr.");
    this.passwordField = page.getByLabel("Password");
    this.dayOfBirthDropdown = page.locator("#days");
    this.monthOfBirthDropdown = page.locator("#months");
    this.yearOfBirthDropdown = page.locator("#years");
    this.newsletterCheckbox = page.getByLabel("Sign up for our newsletter!");
    this.specialOffersCheckbox = page.getByLabel(
      "Receive special offers from our partners!"
    );
    this.firstNameField = page.getByLabel("First name");
    this.lastNameField = page.getByLabel("Last name");
    this.addressField = page.getByLabel("Address *");
    this.countryDropdown = page.locator('[id="country"]');
    this.stateField = page.getByLabel("State");
    this.cityField = page.getByLabel("City");
    this.zipcodeField = page.locator('[id="zipcode"]');
    this.mobileNumberField = page.getByLabel("Mobile Number");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
    this.accountCreatedInfo = page.locator('[data-qa="account-created"]');
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.logoutLink = page.getByRole("link", { name: "Logout" });
  }

  async fillForm(dane: AccountInfo) {
    await this.mrGenderRadioButton.check();
    await this.passwordField.fill(dane.password);
    await this.dayOfBirthDropdown.selectOption(dane.day);
    await this.monthOfBirthDropdown.selectOption(dane.month);
    await this.yearOfBirthDropdown.selectOption(dane.year);
    await this.newsletterCheckbox.check();
    await this.specialOffersCheckbox.check();
    await this.firstNameField.fill(dane.firstName);
    await this.lastNameField.fill(dane.lastName);
    await this.addressField.fill(dane.address);
    await this.countryDropdown.selectOption(dane.country);
    await this.stateField.fill(dane.state);
    await this.cityField.fill(dane.city);
    await this.zipcodeField.fill(dane.zipcode);
    await this.mobileNumberField.fill(dane.mobileNumber);
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
