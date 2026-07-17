# Test Cases Document
**Project:** Banquet Invitation<br>
**Version:** 2.0.2<br>
**Prepared by:** Kaho Shibuya<br>
**Date:** 2026-07-17<br>

---

## 1. Landing Page

### TC-LP-01 — Verify the page load and key UI elements
**Related Scenario:** LP-01

**Preconditions:** User accesses application URL

**Steps:**
1. Open browser
2. Navigate to application URL

**Test Data:** N/A

**Expected Result:**
- Event title is displayed.
- Event date is displayed.
- Event time is displayed.
- Venue information is displayed.
- Countdown component is displayed.

**Automated:** Yes

---

### TC-LP-02 — Verify RSVP navigation
**Related Scenario:** LP-02

**Preconditions:** User is on the landing page

**Steps:**
1. Locate RSVP button
2. Click RSVP button

**Test Data:** N/A

**Expected Result:**
- User is redirected to the Guest Search page

**Automated:** Yes

---

## 2. RSVP Page

### TC-RS-01 — Verify the guest search page loads
**Related Scenario:** RS-01

**Preconditions:** User navigates to the guest search page

**Steps:**
1. Navigate to the guest search URL

**Test Data:** N/A

**Expected Result:**
- Page loads successfully
- No layout shift or blank screen

**Automated:** Yes

---


### TC-RS-02 — Verify the event information display
**Related Scenario:** RS-01

**Preconditions:** User is on the guest search page

**Steps:**
1. Observe the event information section

**Test Data:** N/A

**Expected Result:**
- Event date and time are displayed
- Event timetable is displayed
- Venue information is displayed
- RSVP deadline is displayed

**Automated:** Yes

---

### TC-RS-03 — Verify the map link functionality
**Related Scenario:** RS-02

**Preconditions:** User is on the guest search page

**Steps:**
1. Locate the map link
2. Click the map link

**Test Data:** N/A

**Expected Result:**
- The map link is visible
- The map opens in a new tab
- The link leads to the Google Maps page

**Automated:** Yes

---

### TC-RS-04-A — Search a valid guest without RSVP
**Related Scenario:** RS-02

**Preconditions:** User is on the guest search page

**Steps:**
1. Enter a valid name
2. Click Next

**Test Data:**
- First Name: Pat
- Last Name: Sharp

**Expected Result:**
- RSVP form is displayed

**Automated:** Yes

---

### TC-RS-04-B — Search a valid guest with an existing RSVP
**Related Scenario:** RS-02

**Preconditions:** User is on the guest search page

**Steps:**
1. Enter a valid name
2. Click Next

**Test Data:**
- First Name: Karla
- Last Name: Webb

**Expected Result:**
- The confirmation for editing RSVP is displayed

**Automated:** Yes

---

### TC-RS-05 — Search non-existing guest
**Related Scenario:** RS-03

**Preconditions:** User is on the guest search page

**Steps:**
1. Enter an invalid or random name
2. Click Next

**Test Data and Expected Result:**

| First Name | Last Name | Expected Result                                                                            |
|------------|-----------|--------------------------------------------------------------------------------------------|
| ""         | "Doe"     | An error message is displayed for the first name input field. The search is not submitted. |
| "John"     | ""        | An error message is displayed for the last name input field. The search is not submitted.  |
| "John"     | "Doe"     | An error page is displayed.                                                                |

**Automated:** Yes

---

### TC-RS-06 — Validation for empty input fields
**Related Scenario:** RS-04

**Preconditions:** User is on the guest search page

**Steps:**
1. Leave first name empty
2. Leave last name empty
3. Click Next

**Test Data and Expected Result:**

| First Name | Last Name | Expected Result                                                                                          |
|------------|-----------|----------------------------------------------------------------------------------------------------------|
| ""         | ""        | Error messages are displayed for the first and last name input fields. The search is not submitted.      |
| " "        | " "       | Error messages are displayed for the first and last name input fields. The search is not submitted.      |

**Automated:** Yes

---

### TC-RS-07 — Access an RSVP form for the guest with existing RSVP 
**Related Scenario:** RS-05

**Preconditions:** 
- User is on the guest search page
- Guest already submitted RSVP
  - RSVP status is not "null"

**Steps:**
1. Search for existing guest
2. Click Next
3. Confirm editing the existing RSVP to proceed to the form

**Test Data:**
- First Name: Karla
- Last Name: Webb

**Expected Result:**
- The confirmation for editing RSVP is displayed
- Previous RSVP data is pre-filled in the form:
    - Attendance: Joyfully Accept
    - Joining with: 
      - Rita Webb: (checked)
    - Dietary Restrictions: empty for Karla and "peanuts" for Rita
    - Message: Congrats!

**Automated:** Yes

---

### TC-RS-08 — Navigation back to landing page
**Related Scenario:** RS-06

**Preconditions:** User is on the guest search page

**Steps:**
1. Locate Back button
2. Click Back button

**Test Data:** N/A

**Expected Result:**
- User is redirected to the landing page

**Automated:** Yes

---

### TC-FM-01-A — Solo guest submits a new RSVP
**Related Scenario:** FM-01

**Preconditions:**
- User is on the guest search page
- Guest has not submitted RSVP yet 
  - RSVP status is "null"
- Guest is not accompanying anyone

**Submission Steps:**
1. Search for the guest: "Pat Sharp"
2. Select the attendance option: "Joyfully Accept"
3. Enter dietary restriction: "Lactose Intolerant"
4. Enter message: "Can't wait to see you!🤍"
5. Click Submit

**Verification Steps:**
1. Confirm the success message
2. Navigate back to the guest search page
3. Search for the guest again: "Pat Sharp"
4. Confirm editing the existing RSVP to proceed to the form
5. Verify previously submitted values are pre-populated

**Test Data:**
- Guest: Pat Sharp
- Attendance: "Joyfully Accept"
- Dietary Restrictions: "Lactose Intolerant"
- Message: "Can't wait to see you!🤍"

**Expected Result:**
- User is redirected to the thank-you page
- "Joining with" is not visible
- Dietary Restriction has only one field for the guest
- When the guest accesses the RSVP form again:
  - Attendance selects "Joyfully Accept"
  - Dietary Restriction contains "Lactose Intolerant"
  - Message contains "Can't wait to see you!🤍"

**Automated:** Yes

---

### TC-FM-01-B — Guest with accompanying guest submits a new RSVP
**Related Scenario:** FM-01

**Preconditions:**
- User is on the guest search page
- Guest has not submitted RSVP yet 
  - RSVP status is "null"
- Guest is accompanying another guest

**Submission Steps:**
1. Search for the guest: "Felecia Gillespie"
2. Select the attendance option: "Joyfully Accept"
3. Select the joining with option: "Cecile Weeks"
4. Click Submit

**Verification Steps:**
1. Confirm the success message
2. Navigate back to the guest search page
3. Search for the guest again: "Felecia Gillespie"
4. Confirm editing the existing RSVP to proceed to the form
5. Verify previously submitted values are pre-populated

**Test Data:**
- Guest: Felecia Gillespie
- Attendance: "Joyfully Accept"
- Joining with: 
  - Cecile Weeks: (checked)

**Expected Result:**
- User is redirected to the thank-you page
- When the guest accesses the RSVP form again:
  - Attendance is pre-populated as "Joyfully Accept"
  - "Joining with" is visible and "Cecile Weeks" is selected
  - Dietary Restriction is empty for both guests
  - Message is empty

**Automated:** Yes

---

### TC-FM-02 — Required field validation
**Related Scenario:** FM-02

**Preconditions:** 
- User is on the guest search page
- Guest has not submitted RSVP yet 
  - RSVP status is "null"

**Steps:**
1. Search for the guest: "Randy Skinner"
2. Do not select an attendance option 
3. Click Submit

**Test Data:** 
- Guest: Randy Skinner
- Attendance: (not selected)

**Expected Result:**
- Validation error is displayed
- Form is not submitted

**Automated:** Yes

---

### TC-FM-03-A — Read-only state for self-submitted accompanying guest
**Related Scenario:** FM-03

**Preconditions:**
- User is on the guest search page
- Guest has an accompanying guest who has submitted RSVP by themselves
  - Accompanying guest's self_submitted is true
  
**Steps:**
1. Search for the guest: "Beth Ramirez"
2. Confirm editing the existing RSVP to proceed to the form
3. Observe accompanying guest RSVP controls
4. Attempt to modify accompanying guest attendance

**Test Data:**
- Guest: Beth Ramirez
- Attendance: "Joyfully Accept"
- Joining with:
  - Bernardo Sims: (checked)
- Dietary Restrictions:
  - Beth Ramirez: (empty)
- Message: "Happy for you!!"

**Expected Result:**
- Accompanying guest attendance control is disabled
- Accompanying guest's dietary restrictions field is invisible
- Informational message is displayed indicating the guest has already RSVP'd individually.

**Automated:** Yes

---

### TC-FM-03-B — Immutable RSVP fields should not change via from submission
**Related Scenario:** FM-03

**Preconditions:** 
- User is on the guest search page
- Guest has an accompanying guest who has submitted RSVP by themselves
  - Accompanying guest's self_submitted is true
- Accompanying guest has:
  - Attendance: "Joyfully Accept"
  - Dietary Restrictions: "crabs"
  - already submitted RSVP by themselves (self_submitted: true)

**Update Steps:**
1. Search for the guest: "Beth Ramirez"
2. Confirm editing the existing RSVP to proceed to the form
3. Verify that accompanying guest attendance is not editable and the dietary restrictions field is invisible
4. Do not modify any values
5. Click Update

**Verification Steps:**
1. Search for the guest: "Bernardo Sims"
2. Confirm editing the existing RSVP to proceed to the form
3. Verify that accompanying guest attendance and dietary restrictions remain unchanged
4. Verify that the message is the one Bernardo Sims submitted, not the one Beth Ramirez submitted

**Test Data for Update:**
- Guest: Beth Ramirez
- Attendance: "Joyfully Accept"
- Joining with:
  - Bernardo Sims: (checked)
- Dietary Restrictions:
  - Beth Ramirez: (empty)
- Message: "Happy for you!!"

**Test Data for Verification:**
- Guest: Bernardo Sims
- Attendance: "Joyfully Accept"
  Joining with:
  - Beth Ramirez: (checked)
- Dietary Restrictions:
  - Bernardo Sims: "crabs"
- Message: "Congratulations 🫶"

**Expected Result:**
- Already submitted guests are non-editable
- Accompanying guest's dietary restrictions field is invisible
- Informational message is displayed indicating the guest has already RSVP'd individually.
- All fields for the accompanying guest are unchanged after the update

**Automated:** Yes

---

### TC-FM-04 — Update existing RSVP
**Related Scenario:** FM-04

**Preconditions:** 
- User is on the guest search page
- Guest already submitted RSVP
  - RSVP status is not "null"

**Update Steps:**
1. Search for the guest: "Rita Webb"
2. Confirm editing the existing RSVP to proceed to the form
3. Select the attendance option: "Regretfully Decline"
4. Verify that "Joining with" and the dietary restrictions field are invisible
5. Enter the message field: "Sorry that I cannot make it!"
6. Click Update

**Verification Steps:**
1. Search for the guest: "Rita Webb"
2. Confirm editing the existing RSVP to proceed to the form
3. Verify that the attendance is pre-populated as "Regretfully Decline"
4. Verify that "Joining with" and the dietary restrictions field are invisible
5. Verify that the message field contains "Sorry that I cannot make it!"

**Test Data before update:**
- Guest: Rita Webb
- Attendance: "Joyfully Accept"
- Dietary Restrictions: "peanuts"
- Message: (empty)

**Test Data after update:**
- Guest: Rita Webb
- Attendance: "Regretfully Decline"
- Message: "Sorry that I cannot make it!"

**Expected Result:**
- Previous data is pre-filled
- Update is successfully saved
- When the guest accesses the RSVP form again:
  - Attendance is pre-populated as "Regretfully Decline"
  - "Joining with" field is hidden
  - Dietary Restrictions field is hidden
  - Message contains "Sorry that I cannot make it!"

**Automated:** Yes

---

## 3. Confirmation / Success Page

### TC-CF-01 — Thank-you page displays after submission
**Related Scenario:** CF-01

**Preconditions:** User is on the guest search page

**Steps:**
1. Search for a guest: "Laverne	Bryant"
2. Select the attendance option: "Regretfully Decline"
3. Click Submit

**Test Data:**
- Guest: Laverne Bryant
- Attendance: "Regretfully Decline"

**Expected Result:**
- Success (Thank you) message is displayed
- The confetti animation is displayed

**Automated:** No

---

### TC-CF-02 — Navigation back to landing page
**Related Scenario:** CF-02

**Preconditions:** User is on the thank-you page

**Steps:**
1. Click Back button

**Test Data:** N/A

**Expected Result:**
- User returns to the landing page

**Automated:** No

---

## 4. Cross-Functional / Miscellaneous

### TC-XF-01-A — Mobile layout verification
**Related Scenario:** XF-02

**Preconditions:** 
- Device viewport is 390 px width (iPhone 13)
- Browser is Chrome

**Steps:**
1. Access the app on iPhone 13
2. Navigate to the guest search page
3. Search for a guest: "Hanna Kane"
4. Click Update

**Test Data:**
- Guest: Hanna Kane
- Attendance: "Joyfully Accept"
- Dietary Restrictions: "eggs"
- Message: "Can't wait!"

**Expected Result:**
- The landing page is displayed and visible
- All the buttons and links are visible and clickable
- The guest search page is displayed and visible
- The RSVP form is visible and clickable
- Confirmation page is displayed and visible
- No cuts-off or layout issues throughout the RSVP process

**Automated:** No

---

### TC-XF-01-B — Desktop layout verification
**Related Scenario:** XF-02

**Preconditions:** 
- Device viewport is 1470 px width (13.6 inch-MacBook Air)
- Browser is Chrome

**Steps:**
1. Access the app on 13.6 inch-MacBook Air
2. Navigate to the guest search page
3. Search for a guest: "Hanna Kane"
4. Click Update

**Test Data:**
- Guest: Hanna Kane
- Attendance: "Joyfully Accept"
- Dietary Restrictions: "eggs"
- Message: "Can't wait!"

**Expected Result:**
- The landing page is displayed and visible
- All the buttons and links are visible and clickable
- The guest search page is displayed and visible
- The RSVP form is visible and clickable
- Confirmation page is displayed and visible
- No cuts-off or layout issues throughout the RSVP process

**Automated:** No

---

### TC-XF-02 — Keyboard navigation and accessibility check
**Related Scenario:** XF-03

**Preconditions:**
- Device viewport: 1470 px width (13.6-inch MacBook Air)
- Browser: Chrome
- Mouse input is NOT used during the test (keyboard-only navigation)
- User is on the landing page

**Steps:**
1. Use `tab` to navigate to the RSVP button
2. Hit `enter` to proceed to the guest search page
3. Use `tab` to focus on first name input field
4. Enter: "Jeffrey"
5. Use `tab` to focus on last name input field
6. Enter: "Lane"
7. Use `tab` to focus on the Submit button and hit `enter` to proceed to the RSVP form
8. Use `tab` to focus on the attendance option: "Joyfully Accept" and hit `enter` to select
9. Use `tab` and navigate to Submit button and hit `enter` to submit the RSVP form
10. On the thank-you page, use `tab` to navigate to the back button and hit `enter` to return to the landing page
 
**Test Data:**
- Guest: Jeffrey Lane

**Expected Result:**
- All interactive elements are reachable using keyboard navigation (Tab)
- Focus order follows a logical page structure (top → bottom flow)
- Buttons (RSVP, Next, Submit, Back) are operable using Enter
- User can complete the full RSVP flow using keyboard only
- Success page and navigation back to landing page are accessible via keyboard

**Automated:** No