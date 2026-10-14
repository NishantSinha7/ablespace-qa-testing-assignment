const fs = require('node:fs');
const path = require('node:path');
const { defineConfig } = require('@playwright/test');
require('dotenv').config();

const authFile = path.join(__dirname, 'playwright', '.auth', 'user.json');

if (!fs.existsSync(authFile)) {
  console.warn(
    '\nPlaywright auth state was not found. Run `npm run auth:setup` first. ' +
    'The generated playwright/.auth/user.json contains sensitive session data and must not be committed.\n'
  );
}

module.exports = defineConfig({
  testDir: './playwright/tests',
  testMatch: '**/*.spec.cjs',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 30_000,
  reporter: 'list',
  use: {
    baseURL: (process.env.BASE_URL || 'https://staging.ablespace.io').replace(/\/+$/, ''),
    storageState: authFile,
    browserName: 'chromium',
    channel: 'chrome',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  }
});
