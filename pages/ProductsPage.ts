import { type Page, type Locator, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchedProductsHeader: Locator;
  readonly allProductsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator("#search_product");
    this.searchButton = page.locator("#submit_search");
    this.searchedProductsHeader = page.getByRole("heading", {
      name: "Searched Products",
    });
    this.allProductsContainer = page.locator(".features_items");
  }

  async searchForProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  getProductContainerByName(productName: string): Locator {
    return this.allProductsContainer.locator(".product-image-wrapper", {
      hasText: productName,
    });
  }

  async expectProductVisible(productName: string) {
    await expect(this.getProductContainerByName(productName)).toBeVisible();
  }
}
