import {expect, test} from '@playwright/test';

test.describe('journey planner page loads', () => {
    test('journey planner page loads', async ({ page }) => {
        await page.goto('/journey-planner')
        await expect(page.getByText('Plan Your Journey')).toBeVisible()
    })
})