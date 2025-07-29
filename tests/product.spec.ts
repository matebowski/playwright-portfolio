import { test } from "@playwright/test";

test("Search for a product and add to cart", async ({ page }) => {
  await page.goto("/products");
});
