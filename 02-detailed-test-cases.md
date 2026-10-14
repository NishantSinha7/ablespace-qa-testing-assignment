# Section 3 — Detailed Test Cases

**Chosen workflow:** Create Student → Search/View Student → Edit Student → Create Goal → Record Progress.  
**Why this workflow:** It exercises a central user journey from a new student profile to goal tracking and progress review.

## TC-01 — Required-field validation and minimum student creation

- **Preconditions:** Signed into the staging application; Caseload page open; use a unique fictional record.
- **Test data:** First Name `AveryQA`; Last Name `TestRecord`.
- **Steps:**
  1. Select **Add Student → Add Manually**.
  2. Leave First Name and Last Name empty and observe the form.
  3. Confirm both fields have required indicators and Create is disabled.
  4. Enter `AveryQA` and `TestRecord` only.
  5. Create the record.
- **Expected result:** Creation is blocked while required fields are empty. With both required fields filled, the student is created; optional fields can remain blank.
- **Actual result:** Required indicators and disabled Create button were observed on the empty form. The record was then created successfully with only first and last name.
- **Status:** **Pass**

## TC-02 — Search and clear student search

- **Preconditions:** `AveryQA TestRecord` exists in Caseload.
- **Test data:** Search string `AveryQA`.
- **Steps:**
  1. Enter `AveryQA` in Search students.
  2. Inspect the result list.
  3. Clear the search query.
- **Expected result:** The matching student is returned; clearing the query restores the unfiltered list.
- **Actual result:** The target student was returned. Clearing search restored the full student list.
- **Status:** **Pass**

## TC-03 — Student persistence after page refresh

- **Preconditions:** Student creation succeeded.
- **Test data:** `AveryQA TestRecord`.
- **Steps:**
  1. Confirm the student appears in Caseload.
  2. Refresh the page with Ctrl+R.
  3. Wait for Caseload to finish loading.
- **Expected result:** The saved student remains present after refresh.
- **Actual result:** The student remained present. The search query cleared, which did not remove the record.
- **Status:** **Pass**

## TC-04 — Edit optional details and verify persistence

- **Preconditions:** `AveryQA TestRecord` exists.
- **Test data:** School Name `QA Test School`; Room Number `QA-101`.
- **Steps:**
  1. Open the student profile.
  2. Open the student action menu and choose Edit Student.
  3. Enter the School Name and Room Number values.
  4. Click Update.
  5. Verify the values in the profile.
  6. Refresh and verify the values again.
- **Expected result:** Updated values are displayed and persist after refresh.
- **Actual result:** Both values appeared on the profile and remained after refresh.
- **Status:** **Pass**

## TC-05 — Create and display a goal

- **Preconditions:** Student profile selected; Goals tab open.
- **Test data:** Title `QA Reading Accuracy Goal`; description `Given a short reading passage, the student will read 8 out of 10 target words correctly across 3 consecutive sessions.`
- **Steps:**
  1. Open Goals and observe the no-goal empty state.
  2. Choose Add Goal.
  3. Enter the title and description; leave Accuracy selected and retain the default mastery setting.
  4. Click Save Goal.
  5. Inspect the Goals list.
- **Expected result:** The goal saves and appears in the selected student's goal list with its title and description.
- **Actual result:** A success notification appeared and the goal was listed with its title, description, and Not Started status.
- **Status:** **Pass**

## TC-06 — Accuracy calculation and Undo

- **Preconditions:** A goal is configured for Accuracy tracking; session Capture view open.
- **Test data:** One Correct event and one Incorrect event.
- **Steps:**
  1. Click Correct once and inspect counters/accuracy.
  2. Click Incorrect once and inspect counters/accuracy.
  3. Use Undo and inspect whether the most recent entry is reverted.
- **Expected result:** After the first correct response, attempts = 1 and accuracy = 100%. After one correct and one incorrect response, attempts = 2, correct = 1, incorrect = 1, accuracy = 50%. Undo should revert the latest entry.
- **Actual result:** The observed counters and accuracy matched the expected calculation. The counters and displayed accuracy matched the expected calculation. I confirmed that Undo reverted the latest entry. I pressed Undo more than once during exploratory testing, so I did not make further assertions about the final reset state.
- **Status:** **Pass**

## TC-07 — Prompt tracking and consistency across Capture, Stats, and Graph

- **Preconditions:** The Accuracy goal and Capture view are available.
- **Test data:** Prompt type `Verbal`; prompted and unprompted Correct entries.
- **Steps:**
  1. Select Verbal from the prompt dropdown.
  2. Record a prompt and verify the prompt counter.
  3. Record a further Correct response without adding another prompt.
  4. Inspect Capture counters and accuracy labels.
  5. Open Stats and Graph and compare the displayed data.
- **Expected result:** Prompt count reflects the recorded prompt; Capture and Stats show consistent attempts/correct/incorrect totals and the graph reflects the displayed 50% accuracy value.
- **Actual result:** Prompt count became 1. Capture and Stats showed 2 attempts, 2 correct, 0 incorrect, 50% overall/independent accuracy, and 100% prompted accuracy. Graph plotted a 50% data point. This is recorded as observed product behaviour; no assumption is made that overall and prompted accuracy should be identical.
- **Status:** **Pass**

## TC-08 — Save a note and verify after refresh

- **Preconditions:** Student session is open and Notes editor is available.
- **Test data:** `QA test note: Reading goal progress entry verified during testing.`
- **Steps:**
  1. Open Add Note and enter the test note.
  2. Confirm the note appears in Last Note / Notes list.
  3. Refresh the page.
  4. Verify the note text remains available and inspect the Notes count.
- **Expected result:** The note is saved and remains available after refresh.
- **Actual result:** The note text persisted. Notes count briefly displayed 2 before refresh and then displayed 1 after refresh; only the saved note was visible after refresh. The count behaviour was not retested by creating a second note; after refresh, only one saved note was visible. It is not classified as a confirmed bug.
- **Status:** **Pass with observation**
