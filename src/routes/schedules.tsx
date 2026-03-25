import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/schedules')({
  component: SchedulesPage,
})


function SchedulesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  // Mock schedule data
  const schedules = [
    {
      time: '06:15',
      destination: "Simon's Town",
      line: 'Southern Line',
      platform: '4',
      type: 'Express',
    },
    {
      time: '06:30',
      destination: 'Bellville',
      line: 'Northern Line',
      platform: '6',
      type: 'All Stops',
    },
    {
      time: '06:45',
      destination: 'Chris Hani',
      line: 'Cape Flats Line',
      platform: '2',
      type: 'All Stops',
    },
    {
      time: '07:00',
      destination: 'Retreat',
      line: 'Southern Line',
      platform: '4',
      type: 'Express',
    },
    {
      time: '07:15',
      destination: 'Khayelitsha',
      line: 'Central Line',
      platform: '3',
      type: 'All Stops',
    },
    {
      time: '07:30',
      destination: "Simon's Town",
      line: 'Southern Line',
      platform: '5',
      type: 'All Stops',
    },
    {
      time: '07:45',
      destination: 'Bellville',
      line: 'Northern Line',
      platform: '6',
      type: 'Express',
    },
  ]
  const filteredSchedules = schedules.filter(
    (s) =>
      s.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.line.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
              placeholder="Search by station or line..."
              className="pl-10 bg-slate-800/50 border-slate-700"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Button variant="outline" className="w-full gap-2">
          <Download className="w-4 h-4" /> Download PDF
        </Button>
      </div>

      <Card className="overflow-hidden">
        <Tabs defaultValue="weekday">
          <div className="border-b border-slate-800 p-4 bg-slate-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <TabsList>
              <TabsTrigger value="weekday">Weekday</TabsTrigger>
              <TabsTrigger value="weekend">
                Weekend & Public Holidays
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>Valid from Jan 2026</span>
            </div>
          </div>

          <TabsContent value="weekday" className="m-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase bg-slate-900/80 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-medium">Time</th>
                    <th className="px-6 py-4 font-medium">Destination</th>
                    <th className="px-6 py-4 font-medium">Line</th>
                    <th className="px-6 py-4 font-medium">Platform</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {filteredSchedules.map((schedule, i) => (
                    <motion.tr
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      key={i}
                      className="hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-white tabular-nums">
                        {schedule.time}
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-200">
                        {schedule.destination}
                      </td>
                      <td className="px-6 py-4 text-slate-400">
                        {schedule.line}
                      </td>
                      <td className="px-6 py-4 text-cyan-400 font-bold">
                        {schedule.platform}
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            schedule.type === 'Express' ? 'default' : 'outline'
                          }
                          className="text-[10px]"
                        >
                          {schedule.type}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                  {filteredSchedules.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-12 text-center text-slate-500"
                      >
                        No schedules found matching "{searchQuery}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent
            value="weekend"
            className="m-0 p-12 text-center text-slate-400"
          >
            Weekend schedules are currently operating on a reduced frequency.
          </TabsContent>
        </Tabs>
      </Card>
    </motion.div>
  )
}
