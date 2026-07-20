# Test Plan
**Project:** Banquet Invitation<br>
**Version:** 2.1.1<br>
**Prepared by:** Kaho Shibuya<br>
**Date:** 2026-07-17

---

## 1. Purpose
This document defines the overall test strategy, scope, and objectives for the “Banquet Invitation” web application.
The goal is to ensure the reliability of core user flows, particularly guest lookup and RSVP submission.

---

## 2. Test Strategy
This project follows a Risk-Based Testing (RBT) approach.

### Key Principles
- Prioritize core user flows (Guest search, RSVP submission)
- Focus on data integrity and state consistency
- Validate UX across devices and browsers
- Automate high-value regression scenarios using Playwright

---

## 3. Test Levels
### 3.1 Unit Testing
- Form validation logic (Zod schemas)
- Countdown logic
- Button pending state

### 3.2 Integration Testing
- RSVP submission → data persistence verification (optional)

### 3.3 End-to-End Testing
- Guest search flow
- RSVP submission flow
- Edit the existing RSVP flow
- Navigation between pages

---

## 4. Test Scope
### 4.1 In Scope
- UI behavior and user flows
- Form validation behavior
- Navigation flows
- Data persistence (via UI verification)
- Accessibility basics
- Cross-browser compatibility
- Responsive design

### 4.2 Out of Scope
- Performance/load testing
- Security penetration testing
- Authentication systems

---

## 5. Test Objectives
- Verify that all event information is visible and accurate.
- Ensure navigation flows work without broken links.
- Confirm that form fields accept correct data and block invalid data.
- Confirm success state after submitting RSVP.
- Verify that previously submitted form data is correctly pre-populated when the guest revisits the form and that all fields remain fully editable.
- Ensure mobile layout is usable and readable.

---

## 6. Test Items
- Ensure users can successfully complete the RSVP flow
- Ensure correct state handling for existing and new guests
- Ensure the UI reflects the correct system state
- Ensure consistent behavior across devices and browsers

---

## 7. Risks
- No authentication may allow unintended data modification
- UI inconsistencies on older mobile devices
- Dependency on backend availability for RSVP persistence

---

## 8. Test Environment
### Application Environment
- Local development environment
- Application is executed locally using Next.js development server

### Browser
- Chrome (latest)
- Safari (latest)
- Firefox (latest)

### Devices
- MacBook Air
- iPhone 13

### Application URL
- Local URL: http://localhost:3000

### Database
- Local test database
- Seeded with predefined test data required for test execution

---

## 9. Entry / Exit Criteria

### 9-1. Entry Criteria
Testing can begin when:
- The application can be started successfully in the local test environment.
- The test database is initialized with the required test data.
- All required UI components are visible.
- The test environment is stable and available.

### 9-2. Exit Criteria
Testing is complete when:
- All high-priority test cases are executed.
- All critical and major defects identified during testing are fixed or have documented workarounds.
- Test results are documented.