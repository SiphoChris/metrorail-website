import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const zones = await ctx.db.query('fareZones').collect()
    return zones.sort((a, b) => a.zone - b.zone)
  },
})

export const getByZone = query({
  args: { zone: v.number() },
  handler: async (ctx, { zone }) => {
    return ctx.db
      .query('fareZones')
      .withIndex('by_zone', (q) => q.eq('zone', zone))
      .first()
  },
})

// Given two station IDs, return the applicable fare zone
export const getFareForStations = query({
  args: {
    fromStationId: v.id('stations'),
    toStationId: v.id('stations'),
  },
  handler: async (ctx, { fromStationId, toStationId }) => {
    const [from, to] = await Promise.all([
      ctx.db.get(fromStationId),
      ctx.db.get(toStationId),
    ])
    if (!from || !to) return null
    const zone = Math.max(from.zone, to.zone)
    return ctx.db
      .query('fareZones')
      .withIndex('by_zone', (q) => q.eq('zone', zone))
      .first()
  },
})

export const create = mutation({
  args: {
    zone: v.number(),
    label: v.string(),
    distanceRange: v.string(),
    examples: v.string(),
    singleFare: v.number(),  // stored in cents e.g. 650 = R 6.50
    returnFare: v.number(),
    monthlyFare: v.number(),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert('fareZones', args)
  },
})

export const update = mutation({
  args: {
    id: v.id('fareZones'),
    zone: v.optional(v.number()),
    label: v.optional(v.string()),
    distanceRange: v.optional(v.string()),
    examples: v.optional(v.string()),
    singleFare: v.optional(v.number()),
    returnFare: v.optional(v.number()),
    monthlyFare: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => {
    return ctx.db.patch(id, fields)
  },
})

export const remove = mutation({
  args: { id: v.id('fareZones') },
  handler: async (ctx, { id }) => {
    return ctx.db.delete(id)
  },
})