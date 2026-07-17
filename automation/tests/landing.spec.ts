import { test, expect } from '../fixtures/test';

test("TC-LP-01: Verify the page load and key UI elements", async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('event-title')).toBeVisible();
    await expect(page.getByTestId('event-date-time')).toBeVisible();
    await expect(page.getByTestId('venue-info')).toBeVisible();
    await expect(page.getByTestId('countdown')).toBeVisible();
});

test("TC-LP-02: Verify RSVP navigation", async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'RSVP' }).click();

    await expect(page).toHaveURL('/rsvp');
});