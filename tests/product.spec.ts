import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { acceptCookiesIfPresent } from "../helpers/cookies";

test.beforeEach(async ({ page }) => {
  await page.goto("/products");
  await acceptCookiesIfPresent(page);
});

test("Should find a product by searching", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const productName = "Blue Top";

  await productsPage.searchForProduct(productName);

  await expect(productsPage.searchedProductsHeader).toBeVisible();

  await productsPage.expectProductVisible(productName);
});
