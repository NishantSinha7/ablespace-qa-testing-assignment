# Section 2 — Exploratory Test Scenarios

**Web environment:** `https://staging.ablespace.io/`  
**Test window:** 13–14 October 2026  
**Data policy:** One manually created account and fictional test records only.

| ID | Scenario / What was checked | Result |
|---|---|---|
| EX-01 | Complete the normal web signup/onboarding flow, choose the solo-workspace option, select a role, and reach Caseload. | **Pass** — reached the Caseload dashboard in desktop Chrome. Signup negative cases were not explored. |
| EX-02 | Open Add Student with required fields empty and observe required-field gating. | **Pass** — First Name and Last Name were marked required; Create was disabled while both were empty. |
| EX-03 | Create a student using only required First Name and Last Name; leave optional fields blank. | **Pass** — `AveryQA TestRecord` was created and appeared in the student list; optional fields displayed blank/default values. |
| EX-04 | Search for the new student, clear the query, refresh Caseload, and check persistence. | **Pass** — `AveryQA` returned the matching record; clearing search restored the full list; the student remained after refresh. The query reset on refresh. |
| EX-05 | Edit optional student details and verify them after refresh. | **Pass** — School Name `QA Test School` and Room Number `QA-101` appeared after Update and remained after refresh. |
| EX-06 | Open Goals with no goals, create a goal, and inspect the goal list. | **Pass** — an informative empty state appeared; `QA Reading Accuracy Goal` was saved and displayed with its description. |
| EX-07 | Record correct and incorrect responses, inspect counters/accuracy, and use Undo. | **Pass** — counters and displayed accuracy responded to entries (50% after one correct and one incorrect); the tester confirmed Undo reverted the latest entry. Undo was pressed more than once during exploration. |
| EX-08 | Record a verbal prompt, compare Capture, Stats, and Graph views. | **Pass** — prompt count incremented; Capture/Stats showed 2 attempts, 2 correct, 0 incorrect, 50% Accuracy and 100% Prompted Accuracy; Graph plotted 50%. The app distinguishes accuracy metrics; no expectation that they be identical was assumed. |
| EX-09 | Save a student note, refresh, and inspect Worksheets empty state. | **Pass with observation** — note text persisted after refresh and Notes count settled at 1. A count of 2 was briefly visible before refresh; recurrence is unknown. Worksheets displayed a clear “No worksheets assigned” empty state and a Create New action. |
| EX-10 | Install and open the official Google Play Android app, sign in with the same account, and inspect the role-selection flow and student list. | **Issue observed** — role dropdown/options were clipped at the right edge and overlapped the on-screen keyboard; the role prompt remained throughout the recorded attempt, with a brief blank/loading state. The web-staging student was not visible in the app, but this is **not classified as a bug** because staging-versus-production backend/tenant differences were not ruled out. See BUG-01 and OBS-02. |

## Scope boundaries

Testing was intentionally limited to high-value workflows rather than every visible product area. Billing, Family, Accommodations, Service Time, Attachments, report exports, exhaustive field-boundary validation, security testing, penetration testing, load testing, and repeated account creation were not tested. No real student data was entered. Native iOS testing was not performed. The official Google Play Android app was tested on an iQOO Neo 9 Pro running Android 16; the exact app version was not recorded.
