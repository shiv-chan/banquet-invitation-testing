# Test Execution Report

## Test Execution Summary

**Project:**
Banquet Invitation

**Test Type:**
Automated Regression Testing

**Executed By:**
Kaho Shibuya

**Execution Date:**
2026-07-23

## Test Environment

**Application:**
Local development environment

**URL:**
http://localhost:3000

**Browser:**
- Chromium
- Firefox
- WebKit

_All browsers are tested in their latest versions._

**Operating System:**
macOS

**Testing Framework:** Playwright

**Database:**
Local PostgreSQL database with seeded test data

## Test Scope

The automated regression tests covered:

- Landing page functionality
- Guest search flow
- RSVP form submission
- RSVP update flow
- Form validation

## Execution Summary
### Automated Test Results Summary

### Chromium

| Category                 | Total | Passed | Failed |
|--------------------------|-------|--------|--------|
| Landing Page             | 2     | 2      | 0      |
| RSVP Page - Guest Search | 9     | 9      | 0      |
| RSVP Page - RSVP Form    | 6     | 6      | 0      |
| Total                    | 17    | 17     | 0      |

### Firefox

| Category                 | Total | Passed | Failed |
|--------------------------|-------|--------|--------|
| Landing Page             | 2     | 2      | 0      |
| RSVP Page - Guest Search | 9     | 9      | 0      |
| RSVP Page - RSVP Form    | 6     | 6      | 0      |
| Total                    | 17    | 17     | 0      |

### WebKit

| Category                 | Total | Passed | Failed |
|--------------------------|-------|--------|--------|
| Landing Page             | 2     | 2      | 0      |
| RSVP Page - Guest Search | 9     | 9      | 0      |
| RSVP Page - RSVP Form    | 6     | 6      | 0      |
| Total                    | 17    | 17     | 0      |

## Manual Test Results Summary

| Category                         | Total | Passed | Failed |
|----------------------------------|-------|--------|--------|
| Confirmation / Success Page      | 2     | 2      | 0      |
| Cross-Functional / Miscellaneous | 3     | 3      | 0      |

## Detailed Test Results
| Test Case ID | Description                                                 | Result |
|--------------|-------------------------------------------------------------|--------|
| TC-LP-01     | Verify the page load and key UI elements                    | Pass   |
| TC-LP-02     | Verify RSVP navigation                                      | Pass   |
| TC-RS-01     | Verify the guest search page loads                          | Pass   |
| TC-RS-02     | Verify the event information display                        | Pass   |
| TC-RS-03     | Verify the map link functionality                           | Pass   |
| TC-RS-04-A   | Search a valid guest without RSVP                           | Pass   |
| TC-RS-04-B   | Search a valid guest with an existing RSVP                  | Pass   |
| TC-RS-05     | Search non-existing guest                                   | Pass   |
| TC-RS-06     | Validation for empty input fields                           | Pass   |
| TC-RS-07     | Access an RSVP form for the guest with existing RSVP        | Pass   |
| TC-RS-08     | Navigation back to landing page                             | Pass   |
| TC-FM-01-A   | Solo guest submits a new RSVP                               | Pass   |
| TC-FM-01-B   | Guest with accompanying guest submits a new RSVP            | Pass   |
| TC-FM-02     | Required field validation                                   | Pass   |
| TC-FM-02     | Required field validation                                   | Pass   |
| TC-FM-03-A   | Read-only state for self-submitted accompanying guest       | Pass   |
| TC-FM-03-B   | Immutable RSVP fields should not change via from submission | Pass   |
| TC-FM-04     | Update existing RSVP                                        | Pass   |
| TC-CF-01     | Thank-you page displays after submission                    | Pass   |
| TC-CF-02     | Navigation back to landing page                             | Pass   |
| TC-XF-01-A   | Mobile layout verification                                  | Pass   |
| TC-XF-01-B   | Desktop layout verification                                 | Pass   |
| TC-XF-02     | Keyboard navigation and accessibility check                 | Pass   |


## Defects
No defects were identified during this test execution.

Previously reported defect:
- [BUG-001 – Read-only accompanying guest data is overwritten during RSVP update](/bug-reports/BUG-001-read-only-accompanying-guest-data-overwritten.md) (Verified as Fixed)

## Evidence
- [Playwright HTML Report](/evidence/automation/playwright-reports/)
- Test execution screenshots
  - [Automated test execution screenshots](/evidence/automation)
  - [Manual test execution screenshots](/evidence/manual)

## Conclusion

All automated regression tests were executed successfully.

The critical RSVP workflows, including guest search, RSVP submission, and RSVP update scenarios, passed successfully.