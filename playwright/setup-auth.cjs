const fs = require('node:fs/promises');
const path = require('node:path');
const readline = require('node:readline');
const { chromium } = require('@playwright/test');
require('dotenv').config();

const baseURL = (process.env.BASE_URL || 'https://staging.ablespace.io').replace(/\/+$/, '');
const authFile = path.join(__dirname, '.auth', 'user.json');

function waitForEnter(message) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(message, () => {
      rl.close();
      resolve();
    });
  });
}

async function main() {
  let browser;
  let context;

  try {
    await fs.mkdir(path.dirname(authFile), { recursive: true });

    // Use the installed, headed Chrome browser so Google OAuth can be completed by the tester.
    // No Google credentials are read, typed, or stored by this script.
    browser = await chromium.launch({ channel: 'chrome', headless: false });
    context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    console.log('\nAbleSpace Playwright authentication setup');
    console.log('1. Sign in using Continue with Google in the opened Chrome window.');
    console.log('2. Complete any onboarding steps manually. Do not automate signup.');
    console.log('3. Make sure Caseload is usable and no dialog blocks the page.');
    console.log('4. The script will save the local session only after you confirm.\n');

    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    const searchBox = page.getByPlaceholder(/search students/i).first();
    await searchBox.waitFor({ state: 'visible', timeout: 180_000 });

    await waitForEnter('When Caseload is fully loaded and unobstructed, return here and press Enter to save auth state... ');

    // Clicking checks that the search field is actually interactable, not just visible behind a modal.
    await searchBox.click({ timeout: 10_000 });
    await context.storageState({ path: authFile });

    console.log('\nAuth state saved locally to playwright/.auth/user.json');
    console.log('This file contains session data. It is ignored by Git and must never be uploaded or shared.');
    console.log('Next run: npm test\n');
  } catch (error) {
    console.error('\nCould not save an authenticated session.');
    console.error('Check that you finished Google sign-in/onboarding and that the Caseload search box is usable.');
    console.error('If Google blocks sign-in in an automated browser, stop here and do not enter credentials into any script.');
    console.error(error.message);
    process.exitCode = 1;
  } finally {
    if (context) await context.close().catch(() => {});
    if (browser) await browser.close().catch(() => {});
  }
}

main();
