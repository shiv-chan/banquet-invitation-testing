import { test, expect } from '../fixtures/test';

test.beforeAll('Setting up test database', async ({ seedDatabase }) => {
    console.log('Setting up test database');
});

test('TC-FM-01-A: Solo guest submits a new RSVP', async ({ page, rsvpPage, rsvpFormPage, thankYouPage }) => {
    // submission steps
    await rsvpPage.searchGuest('Pat', 'Sharp');
    await rsvpFormPage.acceptButton.check();
    await rsvpFormPage.getDietaryRestriction().fill('Lactose Intolerant');
    await rsvpFormPage.messageInput.fill('Can\'t wait to see you!🤍');
    await rsvpFormPage.submitForm();

    // validation steps
    await thankYouPage.confirmSuccessfulSubmission();
    await page.screenshot({ fullPage: true, path: 'evidence/automation/TC-FM-01-A-successful-submission.png' });
    await rsvpPage.goto();
    await rsvpPage.searchGuest('Pat', 'Sharp');
    await rsvpPage.confirmEditingRSVP();
    await expect(rsvpFormPage.acceptButton).toBeChecked();
    await expect(rsvpFormPage.accompanyingGuestsSection).toBeHidden();
    await expect(rsvpFormPage.guestDietaryRestrictionSection.locator('div')).toHaveCount(1);
    await expect(rsvpFormPage.getDietaryRestriction()).toHaveValue('Lactose Intolerant');
    await expect(rsvpFormPage.messageInput).toHaveValue('Can\'t wait to see you!🤍');
    await page.screenshot({ fullPage: true, path: 'evidence/automation/TC-FM-01-A-after-submission.png' });
});

test('TC-FM-01-B: Guest with accompanying guests submits a new RSVP', async ({ rsvpPage, rsvpFormPage, thankYouPage }) => {
    // submission steps
    await rsvpPage.searchGuest('Felecia', 'Gillespie');
    await rsvpFormPage.acceptButton.check();
    await rsvpFormPage.getCheckboxByName('Cecile Weeks').check();
    await rsvpFormPage.submitForm();

    // validation steps
    await thankYouPage.confirmSuccessfulSubmission();
    await rsvpPage.goto();
    await rsvpPage.searchGuest('Felecia', 'Gillespie');
    await rsvpPage.confirmEditingRSVP();
    await expect(rsvpFormPage.acceptButton).toBeChecked();
    await expect(rsvpFormPage.accompanyingGuestsSection.locator('div')).toHaveCount(2);
    await expect(rsvpFormPage.getCheckboxByName('Cecile Weeks')).toBeChecked();
    const allGuestsDietaryRestriction = await rsvpFormPage.guestDietaryRestrictionSection.locator('div').all();
    for (const restr of allGuestsDietaryRestriction) {
        await expect(restr.getByRole('textbox')).toBeEmpty();
    }
    await expect(rsvpFormPage.messageInput).toBeEmpty();
});

test('TC-FM-02: Required field validation', async ({ page, rsvpPage, rsvpFormPage }) => {
    await rsvpPage.searchGuest('Randy', 'Skinner');
    await rsvpFormPage.waitForRSVPForm();
    const currentUrl = page.url();
    await rsvpFormPage.submitForm();

    await expect(page.locator('div[id="rsvp-error"]')).toBeVisible();
    // stay on the same page after submission attempt
    await expect(page).toHaveURL(currentUrl);
});

test('TC-FM-03-A: Read-only state for self-submitted accompanying guest', async({ page, rsvpPage, rsvpFormPage }) => {
    await rsvpPage.searchGuest('Beth', 'Ramirez');
    await rsvpPage.confirmEditingRSVP();
    await expect(rsvpFormPage.acceptButton).toBeChecked();
    const bernardoAttendance = rsvpFormPage.getCheckboxByName('Bernardo Sims');
    await expect(bernardoAttendance).toBeChecked();
    await expect(page.getByTestId('self-submitted')).toBeVisible();
    await expect(bernardoAttendance.uncheck({
        trial: true,
        timeout: 1000,
    })).rejects.toThrowError();
    await expect(rsvpFormPage.getDietaryRestrictionByName('Beth Ramirez')).toBeEmpty();
    await expect(rsvpFormPage.getDietaryRestrictionByName('Bernardo Sims')).toBeHidden();
    await expect(rsvpFormPage.messageInput).toHaveValue('Happy for you!!');
});

test('TC-FM-03-B: Immutable RSVP fields should not change via from submission', async({ page, rsvpPage, rsvpFormPage, thankYouPage } ) => {
    // update steps
    await rsvpPage.searchGuest('Beth', 'Ramirez');
    await rsvpPage.confirmEditingRSVP();
    await expect(rsvpFormPage.acceptButton).toBeChecked();
    const bernardoAttendance = rsvpFormPage.getCheckboxByName('Bernardo Sims');
    await expect(bernardoAttendance.uncheck({
        trial: true,
        timeout: 1000,
    })).rejects.toThrowError();
    await expect(rsvpFormPage.getDietaryRestrictionByName('Bernardo Sims')).toBeHidden();
    await page.screenshot({ fullPage: true, path: 'evidence/automation/TC-FM-03-B-before-update.png' });
    await rsvpFormPage.submitForm();
    await thankYouPage.confirmSuccessfulSubmission();

    // validation steps
    await rsvpPage.goto();
    await rsvpPage.searchGuest('Bernardo', 'Sims');
    await rsvpPage.confirmEditingRSVP();
    await expect(rsvpFormPage.acceptButton).toBeChecked();
    const bethAttendance = rsvpFormPage.getCheckboxByName('Beth Ramirez');
    await expect(bethAttendance).toBeChecked();
    await expect(bethAttendance.uncheck({
        trial: true,
        timeout: 1000,
    })).rejects.toThrowError();
    await expect(page.getByTestId('self-submitted')).toBeVisible();
    await expect(rsvpFormPage.getDietaryRestrictionByName('Bernardo Sims')).toHaveValue('crabs');
    await expect(rsvpFormPage.getDietaryRestrictionByName('Beth Ramirez')).toBeHidden();
    await expect(rsvpFormPage.messageInput).toHaveValue('Congratulations 🫶');
    await page.screenshot({ fullPage: true, path: 'evidence/automation/TC-FM-03-B-after-update.png' });
});

test('TC-FM-04: Update existing RSVP', async({ rsvpPage, rsvpFormPage, thankYouPage }) => {
    // update steps
    await rsvpPage.searchGuest('Rita', 'Webb');
    await rsvpPage.confirmEditingRSVP();
    // verify pre-populated values
    await expect(rsvpFormPage.acceptButton).toBeChecked();
    await expect(rsvpFormPage.getDietaryRestrictionByName('Rita Webb')).toHaveValue('peanuts');
    await expect(rsvpFormPage.messageInput).toBeEmpty();

    await rsvpFormPage.declineButton.check();
    await expect(rsvpFormPage.accompanyingGuestsSection).toBeHidden();
    await expect(rsvpFormPage.guestDietaryRestrictionSection).toBeHidden();
    await rsvpFormPage.messageInput.fill('Sorry that I cannot make it!');
    await rsvpFormPage.submitForm();
    await thankYouPage.confirmSuccessfulSubmission();

    // validation steps
    await rsvpPage.goto();
    await rsvpPage.searchGuest('Rita', 'Webb');
    await rsvpPage.confirmEditingRSVP();
    await expect(rsvpFormPage.declineButton).toBeChecked();
    await expect(rsvpFormPage.accompanyingGuestsSection).toBeHidden();
    await expect(rsvpFormPage.guestDietaryRestrictionSection).toBeHidden();
    await expect(rsvpFormPage.messageInput).toHaveValue('Sorry that I cannot make it!');
});