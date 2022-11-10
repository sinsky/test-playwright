import { test, expect } from "@playwright/test";

test("qiita.com page test.", async ({ page }) => {
  await page.goto("https://qiita.com/");
  const el = await page.locator("main div:nth-child(3) article");
  await expect(el).toHaveCount(30);

  const questionEl = await page.locator(".st-NewHeader_navigationTabContainer > .st-NewHeader_mainNavigationItem:nth-child(2)");
  await expect(questionEl).toHaveAttribute("href", "/question-trend");
  await questionEl.click();
  await expect(page).toHaveURL(/.*trend/);
  const questionArticle = await page.locator(`main[role="main"] section article`);
  await expect(questionArticle).toHaveCount(24);
});
