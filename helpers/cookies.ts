import { type Page } from "@playwright/test";

export async function acceptCookiesIfPresent(page: Page) {
  const btn = page.getByRole("button", {
    name: /consent|accept|zgadzam|akceptuj/i,
  });
  if (await btn.isVisible()) {
    await btn.click();
  }
}
