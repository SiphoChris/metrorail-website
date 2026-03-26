import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query('stations').collect()
  },
})

export const getActive = query({
  args: {},
  handler: async (ctx) => {
    const stations = await ctx.db.query('stations').collect()
    return stations
      .filter((s) => s.isActive)
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})

export const getByLine = query({
  args: { lineId: v.id('lines') },
  handler: async (ctx, { lineId }) => {
    const stations = await ctx.db.query('stations').collect()
    return stations
      .filter((s) => s.isActive && s.lineIds.includes(lineId))
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})

export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    lineIds: v.array(v.id('lines')),
    zone: v.number(),
    isTerminus: v.boolean(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert('stations', args)
  },
})

export const update = mutation({
  args: {
    id: v.id('stations'),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    lineIds: v.optional(v.array(v.id('lines'))),
    zone: v.optional(v.number()),
    isTerminus: v.optional(v.boolean()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => {
    return ctx.db.patch(id, fields)
  },
})

export const remove = mutation({
  args: { id: v.id('stations') },
  handler: async (ctx, { id }) => {
    return ctx.db.delete(id)
  },
})