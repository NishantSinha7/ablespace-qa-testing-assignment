const { test, expect } = require('@playwright/test');
require('dotenv').config();

const searchTerm = process.env.TEST_STUDENT_SEARCH || 'AveryQA';
const expectedStudentName = process.env.EXPECTED_STUDENT_NAME || 'AveryQA TestRecord';

test('signed-in user can search for the existing fictional QA student', async ({ page }) => {
  // This test is read-only: it does not create, edit, or delete application data.
  await page.goto('/caseload');

  const searchBox = page.getByPlaceholder(/search students/i).first();
  await expect(searchBox).toBeVisible();
  await searchBox.fill(searchTerm);

  await expect(page.getByText(expectedStudentName, { exact: false }).first()).toBeVisible();
});
