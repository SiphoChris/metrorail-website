import {test, expect} from '@playwright/test';

test.describe('schedules page loads', () => {
    test('schedules page loads', async ({ page }) => {
        await page.goto('/schedules')
        await expect(page.getByText('Timetables & Schedules')).toBeVisible()
    })

    test('schedules table is visible', async ({ page }) => {
        await page.goto('/schedules')
        await expect(page.getByRole('table', { name: 'Timetables & Schedules' })).toBeVisible()
    })

})