import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";

test.beforeEach(async ({ page }) => {
  await page.goto("/products");

  const consentButton = page.getByRole("button", { name: "Consent" });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }
});

test("Should find a product by searching", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const productName = "Blue Top";

  await productsPage.searchForProduct(productName);

  await expect(productsPage.searchedProductsHeader).toBeVisible();

  const productContainer = productsPage.getProductContainerByName(productName);

  await expect(productContainer).toBeVisible();
});
