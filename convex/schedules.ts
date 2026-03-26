import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const getAll = query({
  args: {
    dayType: v.optional(v.union(v.literal('weekday'), v.literal('weekend'))),
    lineId: v.optional(v.id('lines')),
  },
  handler: async (ctx, { dayType, lineId }) => {
    let schedules = await ctx.db.query('schedules').collect()
    if (dayType) schedules = schedules.filter(s => s.dayType === dayType)
    if (lineId) schedules = schedules.filter(s => s.lineId === lineId)
    return schedules
      .filter(s => s.isActive)
      .sort((a, b) => a.departureTime.localeCompare(b.departureTime))
  },
})

// Used by live departures: next N trains from a station after a given HH:mm time
export const getUpcoming = query({
  args: {
    fromStationId: v.id('stations'),
    afterTime: v.string(),   // "HH:mm"
    dayType: v.union(v.literal('weekday'), v.literal('weekend')),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { fromStationId, afterTime, dayType, limit }) => {
    const schedules = await ctx.db
      .query('schedules')
      .withIndex('by_from_station', q => q.eq('fromStationId', fromStationId))
      .collect()

    const upcoming = schedules
      .filter(s => s.isActive && s.dayType === dayType && s.departureTime >= afterTime)
      .sort((a, b) => a.departureTime.localeCompare(b.departureTime))
      .slice(0, limit ?? 10)

    // Hydrate with line info
    return Promise.all(
      upcoming.map(async (s) => ({
        ...s,
        line: await ctx.db.get(s.lineId),
        fromStation: await ctx.db.get(s.fromStationId),
        toStation: await ctx.db.get(s.toStationId),
      }))
    )
  },
})

export const create = mutation({
  args: {
    lineId: v.id('lines'),
    fromStationId: v.id('stations'),
    toStationId: v.id('stations'),
    departureTime: v.string(),
    arrivalTime: v.string(),
    platform: v.string(),
    type: v.union(v.literal('express'), v.literal('all-stops')),
    dayType: v.union(v.literal('weekday'), v.literal('weekend')),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert('schedules', args)
  },
})

export const update = mutation({
  args: {
    id: v.id('schedules'),
    lineId: v.optional(v.id('lines')),
    fromStationId: v.optional(v.id('stations')),
    toStationId: v.optional(v.id('stations')),
    departureTime: v.optional(v.string()),
    arrivalTime: v.optional(v.string()),
    platform: v.optional(v.string()),
    type: v.optional(v.union(v.literal('express'), v.literal('all-stops'))),
    dayType: v.optional(v.union(v.literal('weekday'), v.literal('weekend'))),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => {
    return ctx.db.patch(id, fields)
  },
})

export const remove = mutation({
  args: { id: v.id('schedules') },
  handler: async (ctx, { id }) => {
    return ctx.db.delete(id)
  },
})