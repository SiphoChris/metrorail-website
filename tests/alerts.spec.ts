import {test, expect} from '@playwright/test';

test.describe('alerts page', () => {
    test('alerts page loads', async ({ page }) => {
        await page.goto('/alerts')
        await expect(page.getByText('Service Alerts')).toBeVisible()
    })

})