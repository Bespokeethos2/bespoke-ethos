import { test } from "@playwright/test";

const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/solutions",
  "/solutions/consensus-engine",
  "/solutions/redbridging",
  "/solutions/flowstack",
  "/products/cadence",
] as const;

test.describe("Key marketing pages visual smoke test", () => {
  for (const route of ROUTES) {
    test(`captures ${route} layout snapshot`, async ({ page }) => {
      await page.goto(route);
      await page.waitForTimeout(1500);

      const project = test.info().project.name.replace(/\s+/g, "-").toLowerCase();
      const safeRoute = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");

      await page.screenshot({
        path: `test-results/artifacts/${safeRoute}-${project}.png`,
        fullPage: false,
      });
    });
  }
});

