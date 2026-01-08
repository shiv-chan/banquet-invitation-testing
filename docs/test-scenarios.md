# Test Scenarios Document
**Project:** Banquet Invitation<br>
**Version:** 1.0.1<br>
**Prepared by:** Kaho Shibuya<br>
**Date:** 2025-01-07

## Priority Definitions
- **High (P0):** Application-breaking. RSVP flow cannot be completed.
- **Medium (P1):** Functional issues that have workarounds but affect UX.
- **Low (P2):** Cosmetic or minor UI issues (e.g., confetti animation).

## 1. Landing Page
| Scenario ID | Test Scenario                                  | Expected Result                                                                                              | Priority | Automated |
|-------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------|----------|-----------|
| LP-01       | **Smoke Test**: Verify page load & UI elements | Page loads in < 3s. Hero section, event details (date/time/address), and countdown are visible and correct.  | High     | Yes       |
| LP-02       | Verify RSVP button & navigation                | & Navigation	Clicking the "RSVP" button successfully redirects the user to the Search Guest page.            | High     | Yes       |

## 2. RSVP Page
| Scenario ID | Test Scenario                             | Expected Result                                                                                                                                           | Priority | Automated |
|-------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------|
| RS-01       | **Global UI**: Persistent hero & map link | The Hero section (Date/Time/Venue) remains visible throughout the RSVP process. Clicking the "Map" link opens Google Maps with the correct venue address. | Medium   | No        | 

### 2.1 Search Guest
| Scenario ID | Test Scenario                         | Expected Result                                                                                      | Priority | Automated |
|-------------|---------------------------------------|------------------------------------------------------------------------------------------------------|----------|-----------|
| RS-02       | **Happy Path**: Search existing guest | Navigates to the RSVP form.<br>Button label changes to "Searching..." during database communication. | High     | Yes       |
| RS-03       | Search non-existent guest             | Displays the message that no matching guest was found in the database.                               | Medium   | Yes       |
| RS-04       | Search with empty inputs              | Error messages appear if first or last name fields are submitted blank.                              | Medium   | Yes       |
| RS-05       | Existing RSVP detection (Edit mode)   | If guest has already submitted, displays a prompt to edit or cancel.                                 | High     | No        |
| RS-06       | **Navigation**: Back to Landing       | The "Back" button successfully returns the user to the landing page.                                 | Low      | No        |


### 2.2 RSVP Form
| Scenario ID | Test Scenario                             | Expected Result                                                                                                                                                              | Priority | Automated |
|-------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------|
| FM-01       | **Happy Path**: Valid data submission     | User selects attendance; clicking "Submit" updates the database and redirects to the Success page.<br>Button label changes to "Submitting..." during database communication. | High     | Yes       |
| FM-02       | Required fields validation                | Cannot submit without selecting an attendance option (Inline error message appears).                                                                                         | High     | Yes       |
| FM-03       | Accompanying guests display logic         | If applicable, "Joining with:" section displays names and relevant dietary inputs.                                                                                           | Medium   | No        |
| FM-04       | Read-only state for self-submitted guests | If an accompanying guest already RSVP'd individually, their checkbox is read-only with an informative caption.                                                               | High     | No        |
| FM-05       | Update existing RSVP                      | Previously submitted data is pre-populated and successfully updated in the database.<br>Button label changes to "Updating..." during database communication.                 | Medium   | No        |

## 3. Confirmation / Success Page
| Scenario ID | Test Scenario                   | Expected Result                                                           | Priority | Automated |
|-------------|---------------------------------|---------------------------------------------------------------------------|----------|-----------|
| CF-01       | Success UI & animation          | "Thank You" message and confetti animation trigger upon successful POST.  | Low      | No        |
| CF-02       | **Navigation**: Back to Landing | The "Back to Top Page" successfully returns the user to the landing page. | Low      | No        |

## 4. Cross-Functional / Miscellaneous
| Scenario ID | Test Scenario               | Expected Result                                                              | Priority | Automated |
|-------------|-----------------------------|------------------------------------------------------------------------------|----------|-----------|
| XF-01       | Cross-browser compatibility | Core RSVP flow works consistently on Chrome, Safari, and Firefox             | High     | No        |
| XF-02       | Responsive design           | Confirm layout and usability on Mobile (iPhone) and Desktop (Macbook).       | High     | No        |
| XF-03       | Accessibility (A11y)        | Keyboard navigation works; alt text and colour contrast meet basic standard. | Medium   | No        |