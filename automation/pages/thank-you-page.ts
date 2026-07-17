import { expect, type Page, type Locator } from '@playwright/test';

export class ThankYouPage {
    readonly page: Page;
    readonly backButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backButton = page.getByRole('link', { name: 'Back to Top Page' });
    }

    async confirmSuccessfulSubmission() {
        await this.page.waitForURL('/rsvp/thank-you');
        await expect(this.page.locator('h2', { hasText: 'Thank You for Your RSVP!' })).toBeVisible();
    }
}