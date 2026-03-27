import {test, expect} from '@playwright/test';

test.describe('fares page', () => {
    test('fares page loads', async ({ page }) => {
        await page.goto('/fares')
        await expect(page.getByText('Fares & Tickets')).toBeVisible()
    })
})