import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query('lines').collect()
  },
})

export const getActive = query({
  args: {},
  handler: async (ctx) => {
    const lines = await ctx.db.query('lines').collect()
    return lines.filter((l) => l.isActive)
  },
})

export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    color: v.string(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert('lines', args)
  },
})

export const update = mutation({
  args: {
    id: v.id('lines'),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    color: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => {
    return ctx.db.patch(id, fields)
  },
})

export const remove = mutation({
  args: { id: v.id('lines') },
  handler: async (ctx, { id }) => {
    return ctx.db.delete(id)
  },
})