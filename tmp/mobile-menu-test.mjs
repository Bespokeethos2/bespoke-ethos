import { chromium } from '@playwright/test';

const url = 'https://bespoke-ethos-o0jqh1oee-upton-rands-projects.vercel.app';

async function testMobileMenu() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro size
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
  });

  const page = await context.newPage();

  try {
    console.log('Loading page...');
    await page.goto(url, { waitUntil: 'networkidle' });

    // Take screenshot before clicking menu
    await page.screenshot({ path: 'tmp/mobile-before.png', fullPage: false });
    console.log('Saved: tmp/mobile-before.png');

    // Find and click the hamburger menu button
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i]').first();

    if (await menuButton.isVisible()) {
      console.log('Found menu button, clicking...');
      await menuButton.click();
      await page.waitForTimeout(500); // Wait for animation

      // Take screenshot after clicking menu
      await page.screenshot({ path: 'tmp/mobile-menu-open.png', fullPage: false });
      console.log('Saved: tmp/mobile-menu-open.png');

      // Check if menu backdrop is visible and full height
      const menuBackdrop = page.locator('.be-mobile-menu-backdrop').first();
      const menuCard = page.locator('.be-mobile-menu-card, #mobile-navigation-panel').first();

      const backdropVisible = await menuBackdrop.isVisible().catch(() => false);
      const cardVisible = await menuCard.isVisible().catch(() => false);

      console.log(`Menu backdrop visible: ${backdropVisible}`);
      console.log(`Menu card visible: ${cardVisible}`);

      if (backdropVisible) {
        const box = await menuBackdrop.boundingBox();
        if (box) {
          console.log(`Backdrop dimensions: ${box.width}x${box.height} at (${box.x}, ${box.y})`);
          console.log(`Viewport height: 844px`);
          console.log(`Backdrop covers ${((box.height / 844) * 100).toFixed(1)}% of viewport`);
        }
      }

      if (cardVisible) {
        const cardBox = await menuCard.boundingBox();
        if (cardBox) {
          console.log(`Card dimensions: ${cardBox.width}x${cardBox.height} at (${cardBox.x}, ${cardBox.y})`);
        }
      }
    } else {
      console.log('Menu button not found or not visible');
    }

    console.log('\nMobile menu test complete!');

  } catch (error) {
    console.error('Error:', error.message);
    await page.screenshot({ path: 'tmp/mobile-error.png' });
  } finally {
    await browser.close();
  }
}

testMobileMenu();
