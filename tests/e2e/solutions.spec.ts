import { test, expect } from "@playwright/test";

test.describe("Solutions overview", () => {
  test("shows all core offers with clean labels", async ({ page }) => {
    await page.goto("/solutions");

    // Verify the H2 headings for each solution (using the full titles)
    const headingTitles = [
      "Cadence",
      "Consensus Engine",
      "Automation Rescue",
      "Automation Skyway"
    ];

    for (const title of headingTitles) {
      await expect(
        page.getByRole("heading", {
          level: 2,
        }).filter({ hasText: title }).first()
      ).toBeVisible();
    }

    // Verify flagship product names appear somewhere on the page
    const productNames = ["Cadence", "Consensus Engine", "Automation Rescue", "Automation Skyway"];
    for (const name of productNames) {
      // Use regex to match the name regardless of what comes after it
      await expect(page.locator('body').getByText(new RegExp(name, 'i')).first()).toBeVisible();
    }
  });
});
