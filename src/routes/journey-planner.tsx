import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Train } from 'lucide-react'
import JourneyPlannerForm from '@/components/JourneyPlannerForm'

export const Route = createFileRoute('/journey-planner')({
  component: JourneyPlannerPage,
})

function JourneyPlannerPage() {
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const stations = [
    'Cape Town', 'Woodstock', 'Salt River', 'Observatory', 'Mowbray',
    'Rosebank', 'Rondebosch', 'Newlands', 'Claremont', 'Kenilworth',
    'Wynberg', 'Plumstead', 'Steenberg', 'Retreat', 'Muizenberg',
    'Fish Hoek', "Simon's Town", 'Mutual', 'Langa', 'Nyanga',
    'Khayelitsha', 'Chris Hani', 'Maitland', 'Goodwood', 'Parow', 'Bellville',
  ].sort()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 800)
  }

  const routes = [
    { dep: '08:15', arr: '08:50', dur: '35m', line: 'Southern Line', transfers: 0, fare: 'R 12.50' },
    { dep: '08:30', arr: '09:05', dur: '35m', line: 'Southern Line', transfers: 0, fare: 'R 12.50' },
    { dep: '08:45', arr: '09:30', dur: '45m', line: 'Cape Flats Line', transfers: 1, fare: 'R 12.50' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-6xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Planner Form */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Plan Your Journey</h1>
            <p className="text-slate-400">Find the fastest route to your destination.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <JourneyPlannerForm
              stations={stations}
              handleSearch={handleSearch}
              isSearching={isSearching}
            />
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-7">
          {showResults ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-white mb-4">Recommended Routes</h3>

              {routes.map((route, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] hover:border-blue-400/40 hover:bg-blue-500/[0.05] transition-colors cursor-pointer p-5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <p className="text-xl font-bold text-white tabular-nums">{route.dep}</p>

                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          <div className="w-8 h-px bg-white/15" />
                          <div className="text-[10px] text-slate-500 px-1">{route.dur}</div>
                          <div className="w-8 h-px bg-white/15" />
                        </div>
                      </div>

                      <p className="text-xl font-bold text-white tabular-nums">{route.arr}</p>
                    </div>

                    <p className="font-bold text-blue-400">{route.fare}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300">
                        <Train className="w-3 h-3" />
                        {route.line}
                      </span>
                      {route.transfers > 0 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-400">
                          {route.transfers} transfer
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      View details →
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="h-full min-h-96 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/[0.08] rounded-xl bg-white/[0.02]">
              <MapPin className="w-12 h-12 text-white/10 mb-4" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">Where to?</h3>
              <p className="text-sm text-slate-500 max-w-sm">
                Enter your departure and destination stations to see available
                routes, travel times, and fares.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}