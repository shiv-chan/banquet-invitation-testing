import { expect, type Page, type Locator } from '@playwright/test';

export class RsvpPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly nextButton: Locator;
    readonly alreadyRsvpedHeader: Locator;
    readonly guestNotFound: Locator;
    readonly firstNameError: Locator;
    readonly lastNameError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.alreadyRsvpedHeader = page.locator('h2', { hasText: 'It seems you have already RSVP’d!' });
        this.guestNotFound = page.locator('p', { hasText: 'Oops! We can’t find you in the list.' });
        this.firstNameError = page.locator('div[id="first-error"]');
        this.lastNameError = page.locator('div[id="last-error"]');
    }

    async goto() {
        await this.page.goto('/rsvp');
    }

    async searchGuest(first: string, last: string) {
        await this.firstNameInput.fill(first);
        await this.lastNameInput.fill(last);
        await this.nextButton.click();
    }

    async confirmEditingRSVP() {
        await expect(this.alreadyRsvpedHeader).toBeVisible();
        await this.page.getByRole('link', { name: 'Yup' }).click();
    }
}