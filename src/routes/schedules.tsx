import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, Calendar } from 'lucide-react'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export const Route = createFileRoute('/schedules')({
  component: SchedulesPage,
})

function SchedulesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [dayType, setDayType] = useState<'weekday' | 'weekend'>('weekday')

  const schedules = useQuery(api.schedules.getAll, { dayType }) ?? []

  const filteredSchedules = schedules.filter(
    (s) =>
      s.toStation?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.line?.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-5xl"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Timetables & Schedules
        </h1>
        <p className="text-slate-400">
          Find departure times for all Metrorail Western Cape lines.
        </p>
      </div>

      {/* Search + Download */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-3 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <input
            placeholder="Search by station or line..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-white/10 bg-white/5 text-sm text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors hover:border-white/20"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
          />
        </div>
        <Button
          variant="outline"
          className="w-full gap-2 border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <Download className="w-4 h-4" /> Download PDF
        </Button>
      </div>

      {/* Card */}
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <Tabs
          defaultValue="weekday"
          onValueChange={(v) => setDayType(v as 'weekday' | 'weekend')}
        >
          <div className="border-b border-white/10 px-4 py-3 bg-white/3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger
                value="weekday"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-400"
              >
                Weekday
              </TabsTrigger>
              <TabsTrigger
                value="weekend"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-400"
              >
                Weekend & Public Holidays
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>Valid from Jan 2026</span>
            </div>
          </div>

          {(['weekday', 'weekend'] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="m-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2">
                      {['Time', 'Destination', 'Line', 'Platform', 'Type'].map(
                        (h) => (
                          <th
                            key={h}
                            className="px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody role="table"
              aria-label="Timetables & Schedules">
                    {schedules === undefined ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <tr key={i}>
                          <td colSpan={5} className="px-6 py-4">
                            <div className="h-4 rounded bg-white/5 animate-pulse" />
                          </td>
                        </tr>
                      ))
                    ) : filteredSchedules.length > 0 ? (
                      filteredSchedules.map((schedule, i) => (
                        <motion.tr
                          key={schedule._id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="border-b border-white/6 hover:bg-white/4 transition-colors"
                        >
                          <td className="px-6 py-4 font-bold text-white tabular-nums">
                            {schedule.departureTime}
                          </td>
                          <td className="px-6 py-4 font-medium text-slate-200">
                            {schedule.toStation?.name ?? '—'}
                          </td>
                          <td className="px-6 py-4 text-slate-400">
                            {schedule.line?.name ?? '—'}
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-bold text-blue-400 tabular-nums">
                              {schedule.platform}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {schedule.type === 'express' ? (
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/25">
                                Express
                              </span>
                            ) : (
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                                All Stops
                              </span>
                            )}
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-12 text-center text-slate-500"
                        >
                          {searchQuery
                            ? `No schedules found matching "${searchQuery}"`
                            : 'No schedules available.'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  )
}