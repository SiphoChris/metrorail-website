import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  lines: defineTable({
    name: v.string(),         // "Southern Line"
    slug: v.string(),         // "southern-line"
    color: v.string(),        // hex for UI e.g. "#2b65ff"
    isActive: v.boolean(),
  }).index('by_slug', ['slug']),

  stations: defineTable({
    name: v.string(),         // "Cape Town"
    slug: v.string(),         // "cape-town"
    lineIds: v.array(v.id('lines')),  // a station can be on multiple lines
    zone: v.number(),         // 1–4
    isTerminus: v.boolean(),
    isActive: v.boolean(),
  }).index('by_slug', ['slug']),

  schedules: defineTable({
    lineId: v.id('lines'),
    fromStationId: v.id('stations'),
    toStationId: v.id('stations'),
    departureTime: v.string(),   // "06:15" — 24h HH:mm
    arrivalTime: v.string(),     // "07:20"
    platform: v.string(),        // "4"
    type: v.union(
      v.literal('express'),
      v.literal('all-stops'),
    ),
    dayType: v.union(
      v.literal('weekday'),
      v.literal('weekend'),
    ),
    isActive: v.boolean(),
  })
    .index('by_line', ['lineId'])
    .index('by_from_station', ['fromStationId'])
    .index('by_day_type', ['dayType']),

  alerts: defineTable({
    type: v.union(
      v.literal('error'),
      v.literal('warning'),
      v.literal('info'),
    ),
    lineId: v.id('lines'),
    title: v.string(),
    message: v.string(),
    isActive: v.boolean(),
    createdAt: v.number(),      // Date.now()
    updatedAt: v.number(),
  })
    .index('by_active', ['isActive'])
    .index('by_line', ['lineId']),

  fareZones: defineTable({
    zone: v.number(),           // 1–4
    label: v.string(),          // "Zone 1"
    distanceRange: v.string(),  // "0 – 10 km"
    examples: v.string(),       // "Cape Town to Woodstock, Salt River"
    singleFare: v.number(),     // in cents: 650
    returnFare: v.number(),     // 1300
    monthlyFare: v.number(),    // 18000
  }).index('by_zone', ['zone']),
})