# Section 5 — Cross-Browser and Responsive Testing

**Web staging URL:** `https://staging.ablespace.io/`  
**Test window:** 13–14 October 2026  
**Browser versions:** Exact versions were not recorded.

## Desktop/browser smoke-check matrix

| Area / Feature | Chrome desktop | Edge desktop | Firefox desktop | Notes |
|---|---|---|---|---|
| Web signup/onboarding | Pass | No new issue reported | No new issue reported | Full signup was performed in Chrome. Edge and Firefox were smoke-checked; negative signup paths were not tested. |
| Main Caseload workflow | Pass | No new issue reported | No new issue reported | Create/search/edit/refresh were verified primarily in Chrome. Full detailed regression was not repeated in every browser. |
| Student and goal forms | Pass | No new issue reported in smoke check | No new issue reported in smoke check | Student and goal creation were tested primarily in Chrome. |
| Goal Capture, Stats, Graph | Pass | No new issue reported in smoke check | No new issue reported in smoke check | Prompted/independent accuracy display, counts, and graph were checked in Chrome. |
| Notes and Worksheets | Pass | Not specifically retested | Not specifically retested | Note persisted after refresh; Worksheets showed an empty state. |

## Responsive web checks — Chrome DevTools emulation

| Area / Feature | 390 × 844 mobile viewport | 768 × 1024 iPad Mini approximation | 1024 × 1366 iPad Pro approximation | Notes |
|---|---|---|---|---|
| Caseload | Pass with horizontal-scroll note | Pass with horizontal-scroll note | Pass with horizontal-scroll note | Table columns do not all fit at once. Internal horizontal scrolling was available; Actions remained accessible in the mobile view. |
| Student Profile | Pass | Not fully retested | Not fully retested | Profile opened and key controls were visible at 390 × 844. |
| Goals | Pass with horizontal-scroll note | Pass with horizontal-scroll note | Pass with horizontal-scroll note | Goal card/content was readable. Profile tabs extend beyond the visible row but were accessible by horizontal scrolling. |
| Whole-page horizontal overflow | No whole-page sideways movement observed during the check | Not established as a defect | Not established as a defect | On mobile, the observed scrolling was in an inner content section. No confirmed responsive defect was reported from web emulation. |

These are browser-emulation checks, not tests on physical iPad devices. The assignment's requested form also references a mobile setup of 390 × 844; this report separately distinguishes web emulation from native-app testing below.

## Native Android app check (Google Play)

| Area / Feature | Result | Notes |
|---|---|---|
| Sign-in / Caseload view | Pass to the extent observed | The same account signed in and Caseload showed two demo students. Exact app/device/OS versions were not recorded. |
| Role-selection prompt | **Fail — BUG-01** | On opening “Select your role”, the options popover was clipped at the right edge and overlapped the on-screen keyboard; the role prompt remained during the recorded attempt. See Section 4 and the screenshot evidence. |
| Web-staging student visible in app | **Not classified as a bug — OBS-02** | `AveryQA TestRecord` created in staging web was not visible in the public app. The app's backend/tenant was not verified and may differ from staging. |

The official Android app was installed from Google Play and tested on 14 October 2026 on an iQOO Neo 9 Pro running Android 16. The exact app version was not recorded. No iOS app test was performed. The original recording and screenshot is included in `evidence/`.

## Testing limitations

- Exact desktop browser versions and the native app version were not recorded. The Android device/OS were identified as iQOO Neo 9 Pro running Android 16.
- Edge and Firefox checks were smoke checks; the full detailed test suite was not rerun in every browser.
- Tablet results are Chrome DevTools viewport approximations, not physical iPad tests.
- Native Android testing revealed BUG-01; the role-selection interaction should be retested after a fresh app launch.
- Data visibility between staging web and the public Android app remains an environment question, not a confirmed defect.
- No security, penetration, or load testing was performed.
