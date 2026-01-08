# Test Plan
**Project:** Banquet Invitation<br>
**Version:** 1.0.1<br>
**Prepared by:** Kaho Shibuya<br>
**Date:** 2025-12-03

## 1. Purpose
The purpose of this document is to define the requirements and testing scope for manually testing the “Banquet Invitation” web application.
The goal is to verify that all critical features function as expected and provide a reliable user experience across common devices.

## 2. Overview of the Application
The application is a simple event invitation site consisting of:
- A landing page with the event details (date, time, address, etc).
- An RSVP button navigating to a form.
- A form where guests search their name by entering their first name and last name.
- A form where guests provide their attendance status, accompanying guests (if applicable), dietary restrictions, and an optional message.
- A submission complete page.

## 3. Test Scope
### 3.1 In Scope
- UI/UX validation (layout, text correctness, responsiveness).
- Navigation between pages/screens.
- RSVP form behaviour.
- Form validation and error messages.
- Successful form submission.
- Backend data persistence and retrieval (verifying that RSVP submissions are saved, updated, and loaded correctly).
- Accessibility basics (keyboard navigation, alt text, colour contrast).
- Cross-browser checks (Chrome, Safari, Firefox).
- Mobile vs desktop display behaviour.

### 3.2 Out of Scope
- Security testing (penetration, authentication).
- Performance load testing.

## 4. Test Objectives
- Verify that all event information is visible and accurate.
- Ensure navigation flows work without broken links.
- Confirm that form fields accept correct data and block invalid data.
- Confirm success state after submitting RSVP.
- Verify that previously submitted form data is correctly pre-populated when the guest revisits the form and that all fields remain fully editable.
- Ensure mobile layout is usable and readable.

## 5. Test Items
Pages/components included:
1. Landing Page
   - Title
   - Hero section
   - Event details (date, time, venue, and address)
   - RSVP button
   - Countdown section with time-based dynamic text
2. RSVP Page
   - Header
   1. Search Guest
      - Input fields: First name, last name
      - Search (Next) button
      - Error messages if any
      - Display a confirmation prompt asking the guest if they want to edit their RSVP when an existing submission is found
   2. RSVP Form
      - Input fields: Attendance status (yes/no), accompanying guests(checking the box if the person attends), dietary restrictions, message
      - Pre-populated fields when editing previous RSVP
      - Submit button
      - Error messages if any
3. Confirmation State
   - Display of "thank you" or equivalent message after submitting
   
## 6. Assumptions
- Users will access the site via mobile or desktop with modern browsers.
- Internet connection is stable.
- Users do not need accounts or authentication.
- The form submission endpoint is functional.

## 7. Risks
- Users on older iPhones may encounter layout issues.
- Since the system does not implement authentication or identity verification, any individual with access to the RSVP form may be able to view or modify previously submitted guest information.

## 8. Test Environment
- Browsers:
  - Chrome(*version*), Safari(*version*), Firefox(*version*)
- Devices:
  - MacBook Air
  - iPhone 13
- Website:
  - https://kaho-and-jade-banquet-invitation.vercel.app/

## 9. Entry Criteria
Testing can begin when:
- The build is deployed and accessible via the URL.
- All required UI components are visible.
- Form submission endpoint is active.

## 10. Exit Criteria
Testing is complete when:
- All high-priority test cases are executed.
- All critical and major defects are fixed or workarounds exist.
- Test results are documented.

## 11. Test Deliverables
- Test Requirements Document (this file)
- Test Scenarios
- Test Cases
- Test Execution Report(s)
- Bug Report(s)
- Test Summary