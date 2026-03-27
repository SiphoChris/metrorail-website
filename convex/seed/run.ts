import { internalMutation } from '../_generated/server'
import { centralLine } from './data/central_line'
import { fareZones } from './data/fares'

// Run with: pnpm dlx convex run seed/run:execute
// Seeds all lines, stations, schedules, and fare zones.
// Run seed/clear:run first if you need a clean slate.

export const execute = internalMutation({
  handler: async (ctx) => {
    console.log('🌱 Starting seed...')

    // -------------------------------------------------------------------------
    // FARE ZONES (no dependencies)
    // -------------------------------------------------------------------------
    console.log('  Seeding fare zones...')
    for (const zone of fareZones) {
      await ctx.db.insert('fareZones', zone)
    }
    console.log(`  ✓ ${fareZones.length} fare zones`)

    // -------------------------------------------------------------------------
    // LINES + STATIONS + SCHEDULES
    // Add more lines here as they come (Southern, Northern, Cape Flats...)
    // -------------------------------------------------------------------------
    const linesToSeed = [centralLine]

    for (const lineData of linesToSeed) {
      console.log(`  Seeding ${lineData.line.name}...`)

      // 1. Insert line
      const lineId = await ctx.db.insert('lines', lineData.line)

      // 2. Insert stations, build slug → _id map
      const stationMap = new Map<string, string>()
      for (const station of lineData.stations) {
        const id = await ctx.db.insert('stations', {
          ...station,
          lineIds: [lineId],
        })
        stationMap.set(station.slug, id)
      }
      console.log(`    ✓ ${lineData.stations.length} stations`)

      // 3. Insert schedules — resolve slugs to IDs
      let scheduleCount = 0
      for (const schedule of lineData.schedules) {
        const fromStationId = stationMap.get(schedule.from)
        const toStationId = stationMap.get(schedule.to)

        if (!fromStationId || !toStationId) {
          console.warn(
            `    ⚠ Skipping schedule: unknown station slug '${schedule.from}' or '${schedule.to}'`,
          )
          continue
        }

        await ctx.db.insert('schedules', {
          lineId,
          fromStationId: fromStationId as any,
          toStationId: toStationId as any,
          departureTime: schedule.dep,
          arrivalTime: schedule.arr,
          platform: schedule.platform,
          type: schedule.type,
          dayType: schedule.dayType,
          isActive: true,
        })
        scheduleCount++
      }
      console.log(`    ✓ ${scheduleCount} schedules`)
    }

    console.log('✅ Seed complete.')
  },
})