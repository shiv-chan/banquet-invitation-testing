# BUG-001 — Read-only accompanying guest data is overwritten during RSVP update

**Project:** Banquet Invitation<br>
**Bug ID:** BUG-001<br>
**Severity:** High<br>
**Priority:** High<br>
**Status:** Fixed

## Summary
Updating an RSVP unintentionally overwrites the attendance status and dietary restrictions of accompanying guests whose fields are displayed as read-only.

---

## Environment
- Local test environment
- Chrome
- Next.js
- PostgreSQL

---

## Preconditions
- A primary guest belongs to a group with one or more accompanying guests. 
- An accompanying guest has already submitted their RSVP individually (`self_submitted = true`). 
- The accompanying guest's attendance is Accepted (`true`). 
- The accompanying guest has an existing dietary restriction (e.g., `"crabs"`).

---

## Steps to Reproduce
1. Search for the primary guest
2. Confirm editing the existing RSVP to proceed to the form
3. Verify that the accompanying guest's attendance checkbox is not editable and the dietary restrictions field is invisible
4. Do not modify any values
5. Click Update
6. Open the accompanying guest's RSVP form again

---

## Expected Result
The accompanying guest's attendance status and dietary restrictions should remain unchanged.

For example:

| Field                        | Actual           | 
|------------------------------|------------------|
| Attendance ("Joining with:") | Checked (`true`) | 
| Dietary Restrictions         | "crabs"          |

---

## Actual Result
The accompanying guest's attendance status is overwritten during the update.

| Field                        | Actual                                              | 
|------------------------------|-----------------------------------------------------|
| Attendance ("Joining with:") | Unchecked (`false`) - Changed from `true` to `false | 
| Dietary Restrictions         | Changed from "crabs" to `null`                      |

---
## Evidence
### Before Fix:
- [Screenshot showing accompanying guest's RSVP form after update](/evidence/bugs/BUG-001-before.png)
- [Database record showing accompanying guest's RSVP data after update](/evidence/bugs/BUG-001-DB-before.png)
### After Fix:
The values remain unchanged after the RSVP update.
- [Screenshot showing accompanying guest's RSVP form after update](/evidence/bugs/BUG-001-after.png)
- [Database record showing accompanying guest's RSVP data after update](/evidence/bugs/BUG-001-DB-after.png)

---

## Root Cause
Disabled HTML form controls (e.g., checkboxes, text inputs) are not included in HTTP form submissions.

Because the read-only inputs were rendered with the `disabled` attribute and no corresponding hidden inputs were not provided, their values were omitted from the form submisson.<br>
As a result, the server interpreted the missing values as unchecked (`false`) or empty (`null`) and updated the database incorrectly.

---

## Resolution
Hidden inputs were added for all read-only fields to preserve their existing values during form submission.

Example:

```tsx
<input
    type='hidden'
    name={`${company.id}_rsvp`}
    value={company.rsvp ? 1 : 0}
/>


<input 
    type='hidden'
    name={`${company.id}_diet`}
    value={company.restrictions || ""}
/>

```

---

## Regression Test

### Related Test Case
- [TC-FM-03-B — Immutable RSVP fields should not change via from submission](/docs/test-cases.md#tc-fm-03-b--immutable-rsvp-fields-should-not-change-via-from-submission)