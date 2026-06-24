# Test Scenarios Document
**Project:** Banquet Invitation<br>
**Version:** 2.0.1<br>
**Prepared by:** Kaho Shibuya<br>
**Date:** 2026-06-16

## Priority Definitions
- **High (P0):** Application-breaking. RSVP flow cannot be completed.
- **Medium (P1):** Functional issues that have workarounds but affect UX.
- **Low (P2):** Cosmetic or minor UI issues (e.g., confetti animation).

## 1. Landing Page
| Scenario ID | Test Scenario               | Expected Result                                         | Priority | 
|-------------|-----------------------------|---------------------------------------------------------|----------|
| LP-01       | User opens the landing page | Event information and countdown are displayed correctly | High     | 
| LP-02       | User clicks RSVP button     | User is navigated to guest search page                  | High     | 

## 2. RSVP Page
### 2.1 Search Guest
| Scenario ID | Test Scenario                          | Expected Result                                                 | Priority | 
|-------------|----------------------------------------|-----------------------------------------------------------------|----------|
| RS-01       | User accesses the guest search page    | Event information and guest search form are displayed correctly | High     | 
| RS-02       | User searches for a valid guest        | User is taken to RSVP form                                      | High     | 
| RS-03       | User searches for a non-existing guest | System shows "guest not found" state                            | Medium   | 
| RS-04       | User submits empty search form         | Validation errors are displayed                                 | Medium   |
| RS-05       | User accesses already-submitted guest  | System shows edit/update mode                                   | High     |
| RS-06       | User navigates back to landing page    | User returns to landing page                                    | Low      |

### 2.2 RSVP Form
| Scenario ID | Test Scenario                             | Expected Result                                           | Priority | 
|-------------|-------------------------------------------|-----------------------------------------------------------|----------|
| FM-01       | User submits a new RSVP                   | RSVP is successfully recorded                             | High     | 
| FM-02       | User submits without required fields      | System prevents submission and displays validation errors | High     | 
| FM-03       | User manages accompanying guests (if any) | Group members are displayed and handled correctly         | High     | 
| FM-04       | User updates existing RSVP                | Previous data is updated successfully                     | Medium   | 

## 3. Confirmation / Success Page
| Scenario ID | Test Scenario                        | Expected Result                     | Priority | 
|-------------|--------------------------------------|-------------------------------------|----------|
| CF-01       | User completes RSVP submission       | Confirmation message is displayed   | Low      |
| CF-02       | User navigates back to landing page  | User is redirected to landing page  | Low      |

## 4. Cross-Functional / Miscellaneous
| Scenario ID | Test Scenario                                            | Expected Result                                                     | Priority |
|-------------|----------------------------------------------------------|---------------------------------------------------------------------|----------|
| XF-01       | User completes the RSVP flow in supported browsers       | Core RSVP flow functions correctly in Chromium, Firefox, and WebKit | High     | 
| XF-02       | User accesses the application on different screen sizes  | Layout remains usable and readable on mobile and desktop devices    | High     | 
| XF-03       | User navigates via keyboard                              | App is accessible via keyboard navigation                           | Medium   | 