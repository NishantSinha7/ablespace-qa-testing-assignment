# Section 4 — Bug Reports

## BUG-01 — Android role-selection dropdown is clipped and overlaps the on-screen keyboard

- **Bug ID:** BUG-01
- **Title:** [Android] Role-selection dropdown is clipped at the screen edge and obscured by the keyboard
- **Severity:** Medium
- **Priority:** High
- **Environment:** Official AbleSpace app installed from Google Play; tested 14 October 2026. The app's backend/environment was not independently verified.
- **Browser / Device:** Official AbleSpace Android app on iQOO Neo 9 Pro, Android 16; exact app version not recorded.
- **Reproducibility:** Always when the dropdown was opened in the recorded session; not independently retested after app relaunch.
- **Steps to Reproduce:**
  1. Install and open the official AbleSpace Android app from Google Play.
  2. Sign in with the account used during the web-staging test.
  3. When the “What's your role?” sheet appears over Caseload, tap the “Select your role” dropdown.
  4. Observe the options list and the on-screen keyboard.
  5. Repeat opening the selector if it remains on the role prompt; do not enter real student data.
- **Expected Result:** The role selector and options should remain within the visible screen, be readable and tappable while the keyboard is present, and allow the user to complete the role-selection step and continue.
- **Actual Result:** The role-options popover extends to/partly beyond the right screen edge, clipping option text. The on-screen keyboard overlaps the bottom sheet and obscures part of the form/list. The role-selection prompt remained on screen throughout the approximately 37-second recording; a brief blank/loading screen with a spinner appeared before returning to the same prompt. The recording does not capture a successful role selection or completion of this step.
- **Evidence:** - **Screenshot:** [Android role selector clipping](evidence/BUG-01-android-role-picker-clipped.jpg)
- **Screen recording:** [Role selector reproduction video](evidence/BUG-01-android-role-picker-reproduction.mp4)

**Device:** iQOO Neo 9 Pro, Android 16  
**App source:** Google Play Store  
**Test date:** 14 October 2026

**Retest note:** Reproduce after a fresh app launch, record exact Android/app versions, and verify whether selecting a role becomes possible after dismissing the keyboard or scrolling the option list. Severity/priority may be refined after this retest.

## Observations not classified as bugs

### OBS-01 — Notes count briefly differed before and after refresh

- **Environment:** `https://staging.ablespace.io/`; observed 13–14 October 2026.
- **Observed behaviour:** After entering a fictional student note, Notes count briefly displayed `2`. After refreshing, the count displayed `1` and the entered note remained visible.
- **Why not a bug:** The count normalised after refresh and only one saved note was visible. The flow was not repeated, so recurrence remains unknown.
- **Recommended retest:** Observe the count before editing, immediately after adding a note, and after refresh using only fictional data.

### OBS-02 — Student created in staging web was not visible in the Play Store app

- **Observed behaviour:** `AveryQA TestRecord`, created on `https://staging.ablespace.io/`, was not present in the Android app's Caseload, which displayed two demo students.
- **Why not a bug:** The web test used an explicitly named staging environment while the app was installed from the public Play Store. The app may connect to production or a different backend/tenant. Shared account credentials do not prove that both clients use the same database/environment. Backend parity was not verified, so this is recorded as an environment/data-visibility observation rather than a product defect.
- **Recommended follow-up:** Only classify this as a defect if the product specification confirms that the public Android app and the staging web environment should share the same tenant/data source.
