import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const getActive = query({
  args: {},
  handler: async (ctx) => {
    const alerts = await ctx.db
      .query('alerts')
      .withIndex('by_active', (q) => q.eq('isActive', true))
      .collect()

    const order = { error: 0, warning: 1, info: 2 }

    return Promise.all(
      alerts
        .sort((a, b) => order[a.type] - order[b.type])
        .map(async (alert) => ({
          ...alert,
          line: await ctx.db.get(alert.lineId),
        })),
    )
  },
})

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const alerts = await ctx.db.query('alerts').collect()
    return Promise.all(
      alerts
        .sort((a, b) => b.createdAt - a.createdAt)
        .map(async (alert) => ({
          ...alert,
          line: await ctx.db.get(alert.lineId),
        })),
    )
  },
})

export const create = mutation({
  args: {
    type: v.union(v.literal('error'), v.literal('warning'), v.literal('info')),
    lineId: v.id('lines'),
    title: v.string(),
    message: v.string(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const now = Date.now()
    return ctx.db.insert('alerts', { ...args, createdAt: now, updatedAt: now })
  },
})

export const update = mutation({
  args: {
    id: v.id('alerts'),
    type: v.optional(
      v.union(v.literal('error'), v.literal('warning'), v.literal('info')),
    ),
    lineId: v.optional(v.id('lines')),
    title: v.optional(v.string()),
    message: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => {
    return ctx.db.patch(id, { ...fields, updatedAt: Date.now() })
  },
})

export const archive = mutation({
  args: { id: v.id('alerts') },
  handler: async (ctx, { id }) => {
    return ctx.db.patch(id, { isActive: false, updatedAt: Date.now() })
  },
})

export const remove = mutation({
  args: { id: v.id('alerts') },
  handler: async (ctx, { id }) => {
    return ctx.db.delete(id)
  },
})