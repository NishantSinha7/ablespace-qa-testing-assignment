<img width="1912" height="1070" alt="image" src="https://github.com/user-attachments/assets/b430bb25-8923-47a6-bf1d-87aaf367aa32" /># AbleSpace QA Testing Assignment

**Role:** Software Tester (QA)  
**Web application:** [AbleSpace staging](https://staging.ablespace.io/)  
**Test window:** 13–14 October 2026  
**Scope:** Main student-caseload and IEP-goal workflows, desktop-browser smoke checks, responsive web emulation, and a native Android app smoke test.

## Contents

1. [Exploratory test scenarios](01-exploratory-test-scenarios.md)
2. [Detailed test cases](02-detailed-test-cases.md)
3. [Bug reports and observations](03-bug-reports.md)
4. [Cross-browser and responsive report](04-cross-browser-responsive.md)
5. [Test summary](05-test-summary.md)
6. [Evidence](evidence/README.md)

## Test environment

- Web URL: `https://staging.ablespace.io/`
- Primary desktop browser: Google Chrome; exact version not recorded
- Additional desktop smoke checks: Microsoft Edge and Mozilla Firefox; exact versions not recorded
- Chrome DevTools web-emulation viewports: 390 × 844, 768 × 1024, and 1024 × 1366
- Native Android app: official app installed from Google Play on an iQOO Neo 9 Pro running Android 16; exact app version not recorded
- Test data: one account created manually; fictional student, goal, and note data only

## Key findings

- **BUG-01:** Android role-selection dropdown is clipped at the screen edge and overlaps the on-screen keyboard. Severity Medium; priority High. See the report and screenshot and screen-recording evidence.
- **OBS-01:** Notes count briefly showed 2 before refresh and 1 after refresh; not reproduced, so not classified as a bug.
- **OBS-02:** A student created on the staging website was not visible in the public Android app. Backend/tenant parity was not verified, so this is not classified as a bug.

Supporting evidence for BUG-01 is available in the `evidence/` folder. It includes a screenshot and a screen recording demonstrating the Android role-selector layout issue. The app's backend/environment was not independently verified, so the missing staging-created student in the Android app is recorded as an observation rather than a confirmed defect.

## Optional automation

Playwright automation (Section 7) is not included. The assignment states that Sections 1–6 are sufficient for consideration; this package prioritizes those deliverables.
