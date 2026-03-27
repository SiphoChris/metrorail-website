import {test, expect} from '@playwright/test';

test.describe('alerts page loads', () => {
    test('alerts page loads', async ({ page }) => {
        await page.goto('/alerts')
        await expect(page.getByText('Service Alerts')).toBeVisible()
    })

    test('alerts table is visible', async ({ page }) => {
        await page.goto('/alerts')
        await expect(page.getByRole('table', { name: 'Service Alerts' })).toBeVisible()
    })

})