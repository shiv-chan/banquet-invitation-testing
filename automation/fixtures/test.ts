import { test as base } from '@playwright/test';
import { RsvpPage } from '../pages/rsvp-page';
import { RsvpFormPage } from '../pages/rsvp-form-page';
import { ThankYouPage } from '../pages/thank-you-page';

type Fixtures = {
    seedDatabase: void;
    rsvpPage: RsvpPage;
    rsvpFormPage: RsvpFormPage;
    thankYouPage: ThankYouPage;
};

export const test = base.extend<Fixtures>({
    seedDatabase: async ({ request }, use) => {
        await request.post('/api/test/setup', {
            headers: {
                'TEST-SECRET': process.env.TEST_SECRET,
            }
        });
        await use();
    },
    rsvpPage: async ({ page }, use) => {
        const rsvpPage = new RsvpPage(page);
        await rsvpPage.goto();
        await use(rsvpPage);
    },
    rsvpFormPage: async ({ page }, use) => {
        const rsvpFormPage = new RsvpFormPage(page);
        await use(rsvpFormPage);
    },
    thankYouPage: async ({ page }, use) => {
        const thankYouPage = new ThankYouPage(page);
        await use(thankYouPage);
    }
});

export { expect } from '@playwright/test';