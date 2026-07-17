import { test, expect } from '../fixtures/test';

test.beforeAll('Setting up test database', async ({ seedDatabase }) => {
    console.log('Setting up test database');
});

test("TC-RS-01: Verify the guest search page loads", async ({ page, rsvpPage }) => {
    // check for the layout shift
    await expect(page).toHaveScreenshot('rsvp-page.png');
    // check if the page is loaded (not blank)
    await expect(page.locator('main>*')).toHaveCount(2);
});

test("TC-RS-02: Verify the event information display", async({ page, rsvpPage }) => {
    await expect(page.getByTestId('event-date-time')).toBeVisible();
    await expect(page.getByTestId('timetable').locator('p')).toHaveCount(3);
    await expect(page.getByTestId('venue-info')).toBeVisible();
    await expect(page.getByTestId('deadline')).toBeVisible();
});

test("TC-RS-03: Verify the map link functionality", async({ page, rsvpPage }) => {
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Map' }).click(),
    ]);
    await expect(newPage).toHaveURL(/(maps\.google\.com|google\.com\/maps|maps\.app\.goo\.gl)/);
});

test("TC-RS-04-A: Search a valid guest without RSVP", async ({ rsvpPage, rsvpFormPage }) => {
    await rsvpPage.searchGuest('Pat', 'Sharp');
    await rsvpFormPage.waitForRSVPForm();
    await expect(rsvpFormPage.form).toBeVisible();
});

test("TC-RS-04-B: Search a valid guest with an existing RSVP", async ({ rsvpPage }) => {
    await rsvpPage.searchGuest('Karla', 'Webb');
    await expect(rsvpPage.alreadyRsvpedHeader).toBeVisible();
});

test("TC-RS-05: Search non-existing guest", async ({ rsvpPage }) => {
    await rsvpPage.searchGuest('', 'Doe');
    await expect(rsvpPage.firstNameError).toBeVisible();

    await rsvpPage.searchGuest('John', '');
    await expect(rsvpPage.lastNameError).toBeVisible();

    await rsvpPage.searchGuest('John', 'Doe');
    await expect(rsvpPage.guestNotFound).toBeVisible();
});

test("TC-RS-06: Validation for empty input fields", async ({ rsvpPage }) => {
    await rsvpPage.searchGuest('', '');
    await expect(rsvpPage.firstNameError).toBeVisible();
    await expect(rsvpPage.lastNameError).toBeVisible();

    await rsvpPage.searchGuest(' ', ' ');
    await expect(rsvpPage.firstNameError).toBeVisible();
    await expect(rsvpPage.lastNameError).toBeVisible();
});

test("TC-RS-07: Access an RSVP form for the guest with existing RSVP", async({ rsvpPage, rsvpFormPage }) => {
    await rsvpPage.searchGuest('Karla', 'Webb');
    await rsvpPage.confirmEditingRSVP();

    await expect(rsvpFormPage.acceptButton).toBeChecked();
    await expect(rsvpFormPage.getCheckboxByName('Rita Webb')).toBeChecked();
    await expect(rsvpFormPage.getDietaryRestrictionByName('Karla Webb')).toHaveValue('');
    await expect(rsvpFormPage.getDietaryRestrictionByName('Rita Webb')).toHaveValue('peanuts');
    await expect(rsvpFormPage.messageInput).toHaveValue('Congrats!');
});

test("TC-RS-08: Navigation back to landing page", async({ page, rsvpPage }) => {
    await page.getByRole('link', {name: 'Back'}).click();
    await expect(page).toHaveURL('/');
});