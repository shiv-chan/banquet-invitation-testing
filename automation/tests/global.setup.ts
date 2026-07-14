import { test as setup } from '@playwright/test';

setup('Set up test database', async ( { page } ) => {
    console.log('Setting up test database');
    await page.request.post('/api/test/setup', {
        headers: {
            'TEST-SECRET': process.env.TEST_SECRET,
        }
    });
});