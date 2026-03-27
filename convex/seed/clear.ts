import { MutationCtx } from '../_generated/server'
import { internalMutation } from '../_generated/server'

// Run with: pnpm dlx convex run seed/clear:run
// Deletes ALL rows from every table. Use before re-seeding.

export const run = internalMutation({
  handler: async (ctx: MutationCtx) => {
    console.log('🗑️  Clearing all tables...')

    const tables = [
      'schedules',
      'alerts',
      'stations',
      'lines',
      'fareZones',
    ] as const

    for (const table of tables) {
      const rows = await ctx.db.query(table).collect()
      await Promise.all(rows.map((row) => ctx.db.delete(row._id)))
      console.log(`   Deleted ${rows.length} rows from '${table}'`)
    }

    console.log('✅ Database cleared.')
  },
})