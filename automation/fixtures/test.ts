import { test as base } from '@playwright/test';
import { RsvpPage } from '../pages/rsvp-page';
import { RsvpFormPage } from '../pages/rsvp-form-page';

type Fixtures = {
    rsvpPage: RsvpPage;
    rsvpFormPage: RsvpFormPage;
};

export const test = base.extend<Fixtures>({
    rsvpPage: async ({ page }, use) => {
        const rsvpPage = new RsvpPage(page);
        await rsvpPage.goto();
        await use(rsvpPage);
    },
    rsvpFormPage: async ({ page }, use) => {
        const rsvpFormPage = new RsvpFormPage(page);
        await use(rsvpFormPage);
    }
});

export { expect } from '@playwright/test';