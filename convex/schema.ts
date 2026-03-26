import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  lines: defineTable({
    name: v.string(),
    slug: v.string(),
    color: v.string(),
    isActive: v.boolean(),
  }).index('by_slug', ['slug']),

  stations: defineTable({
    name: v.string(),
    slug: v.string(),
    lineIds: v.array(v.id('lines')),
    zone: v.number(),
    isTerminus: v.boolean(),
    isActive: v.boolean(),
  }).index('by_slug', ['slug']),

  schedules: defineTable({
    lineId: v.id('lines'),
    fromStationId: v.id('stations'),
    toStationId: v.id('stations'),
    departureTime: v.string(),
    arrivalTime: v.string(),
    platform: v.string(),
    type: v.union(v.literal('express'), v.literal('all-stops')),
    dayType: v.union(v.literal('weekday'), v.literal('weekend')),
    isActive: v.boolean(),
  })
    .index('by_line', ['lineId'])
    .index('by_from_station', ['fromStationId'])
    .index('by_day_type', ['dayType']),

  alerts: defineTable({
    type: v.union(v.literal('error'), v.literal('warning'), v.literal('info')),
    lineId: v.id('lines'),
    title: v.string(),
    message: v.string(),
    isActive: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_active', ['isActive'])
    .index('by_line', ['lineId']),

  fareZones: defineTable({
    zone: v.number(),
    label: v.string(),
    distanceRange: v.string(),
    examples: v.string(),
    singleFare: v.number(),
    returnFare: v.number(),
    monthlyFare: v.number(),
  }).index('by_zone', ['zone']),
})