import { type Page, type Locator } from '@playwright/test';

export class RsvpFormPage {
    readonly page: Page;
    readonly form: Locator;
    readonly acceptButton: Locator;
    readonly declineButton: Locator;
    readonly accompanyingGuestsSection: Locator;
    readonly guestDietaryRestrictionSection: Locator;
    readonly messageInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.form = page.locator('form');
        this.acceptButton = page.getByRole('radio', { name: 'Joyfully Accept' });
        this.declineButton = page.getByRole('radio', { name: 'Regretfully Decline' });
        this.accompanyingGuestsSection = page.getByTestId('accompanying-guests');
        this.guestDietaryRestrictionSection = page.getByTestId('dietary-restrictions');
        this.messageInput = page.getByRole('textbox', { name: 'Message - Totally optional!' });
        this.submitButton = page.getByRole('button', { name: /submit|update/i });
    }

    async waitForRSVPForm() {
        await this.page.waitForURL(/rsvp\/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    }

    getCheckboxByName(name: string): Locator {
        return this.accompanyingGuestsSection.getByRole('checkbox', { name: `${name}` });
    }

    // For solo guests
    getDietaryRestriction() {
        return this.guestDietaryRestrictionSection.getByRole('textbox');
    }

    getDietaryRestrictionByName(name: string): Locator {
        return this.guestDietaryRestrictionSection.getByRole('textbox', { name: new RegExp(`${name}`)});
    }

    async submitForm() {
        await this.submitButton.click();
    }
}