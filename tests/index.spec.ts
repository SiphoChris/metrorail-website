import { test, expect } from '@playwright/test'

test.describe('home page', () => {
  test('landing page loads', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByLabel('logo')).toBeVisible()
  })

  test('root menu opens and closes', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle') // wait for full hydration

  await page.getByLabel('Open menu').click()
  await expect(page.locator('aside')).toHaveClass(/visible/)
  await expect(page.locator('h2', { hasText: 'Regions' })).toBeVisible()

  await page.getByLabel('Close menu').click()
  await expect(page.locator('aside')).toHaveClass(/invisible/)
  await expect(page.locator('h2', { hasText: 'Regions' })).toBeHidden()
})

test('call-to-action buttons are visible', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')

  const viewScheduleLink = page.getByRole('link', { name: 'View Schedules' })
  await expect(viewScheduleLink).toBeVisible()
  await viewScheduleLink.click()
  await expect(page).toHaveURL('/schedules')

  await page.goto('/')
  await page.waitForLoadState('networkidle')

  const planJourneyLink = page.getByRole('link', { name: 'Plan a Journey' })
  await expect(planJourneyLink).toBeVisible()
  await planJourneyLink.click()
  await expect(page).toHaveURL('/journey-planner')
})
})