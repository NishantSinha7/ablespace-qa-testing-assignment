# Optional Playwright Automation (Section 7)

This small JavaScript test verifies a read-only workflow in the AbleSpace staging web application: open Caseload, search for the fictional QA student created manually during exploratory testing, and verify the matching record is visible.

## Why Google sign-in is manual

The account uses **Continue with Google**. The script does not automate Google OAuth, signup, or collect the Google password/OTP. Instead, `npm run auth:setup` opens a headed Chrome window so the tester can sign in and complete onboarding manually. After Caseload is usable, the script stores Playwright browser state locally for the test run.

The saved `playwright/.auth/user.json` may contain session cookies and other sensitive authentication state. It is listed in `.gitignore`; never commit or share it. If the session expires, rerun the auth setup.

## Requirements

- Node.js 22 or newer
- Google Chrome installed
- Access to the AbleSpace staging site and the manually created test account

## Install

Run these commands from the repository root:

```bash
npm install
```

Copy `.env.example` to `.env` and confirm the staging URL and fictional test student's search text. No email, password, or OTP belongs in `.env` or source code.

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## Create the local authenticated session

```bash
npm run auth:setup
```

In the Chrome window, use **Continue with Google** manually. Complete any onboarding screens and make sure the Caseload page is fully loaded with no dialog blocking interaction. Return to the terminal and press Enter when prompted. The script saves the browser state to `playwright/.auth/user.json` locally.

If the setup times out or cannot click the Caseload search box, close the browser, reopen setup, and finish onboarding before pressing Enter. Do not try to bypass Google's sign-in controls or place credentials in code.

## Run the test

```bash
npm test
```

To watch the browser while the test runs:

```bash
npm run test:headed
```

To open the HTML report after a run:

```bash
npm run test:report
```

## Test data and scope

- Base URL: `https://staging.ablespace.io`
- Default search term: `AveryQA`
- Expected fictional student: `AveryQA TestRecord`
- The test only searches and asserts visibility. It does not create, edit, or delete data.
- If the student is removed or the staging test data is reset, update the `.env` values to match a permitted fictional test record or recreate the single test record manually in the staging app.

## Troubleshooting

- **Login redirects back to Google:** rerun `npm run auth:setup` and complete sign-in manually in the opened Chrome window.
- **Search field not found:** verify that onboarding is complete and Caseload is usable, and confirm `BASE_URL` points at the staging website.
- **Student assertion fails:** verify the fictional student still exists in staging and that `TEST_STUDENT_SEARCH` / `EXPECTED_STUDENT_NAME` match the visible record.
- **Auth expired:** rerun `npm run auth:setup` to refresh the ignored local state.

## Execution status

During this assignment, Google sign-in rejected the Playwright-launched Chrome browser with the message “This browser or app may not be secure.” No authenticated browser state was saved, and the automated test was not executed successfully. Do not bypass Google's security controls or store Google credentials in the source code. The test should be considered unverified until it can be run with an approved authenticated staging session.
