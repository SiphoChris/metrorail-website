import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  ArrowRightLeft,
  Clock,
  Calendar,
  Train,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import JourneyPlannerForm from '@/components/JourneyPlannerForm'


export const Route = createFileRoute('/journey-planner')({
  component: JourneyPlannerPage,
})


function JourneyPlannerPage() {
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const stations = [
    'Cape Town',
    'Woodstock',
    'Salt River',
    'Observatory',
    'Mowbray',
    'Rosebank',
    'Rondebosch',
    'Newlands',
    'Claremont',
    'Kenilworth',
    'Wynberg',
    'Plumstead',
    'Steenberg',
    'Retreat',
    'Muizenberg',
    'Fish Hoek',
    "Simon's Town",
    'Mutual',
    'Langa',
    'Nyanga',
    'Khayelitsha',
    'Chris Hani',
    'Maitland',
    'Goodwood',
    'Parow',
    'Bellville',
  ].sort()
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 800)
  }
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
      className="container mx-auto px-4 py-12 max-w-6xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Planner Form */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Plan Your Journey
            </h1>
            <p className="text-slate-400">
              Find the fastest route to your destination.
            </p>
          </div>

          <Card className="bg-slate-800/80 border-slate-700">
            <CardContent className="p-6">
              <JourneyPlannerForm stations={stations} handleSearch={handleSearch} isSearching={isSearching} />
            </CardContent>
          </Card>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-7">
          {showResults ? (
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-white mb-4">
                Recommended Routes
              </h3>

              {[
                {
                  dep: '08:15',
                  arr: '08:50',
                  dur: '35m',
                  line: 'Southern Line',
                  transfers: 0,
                  fare: 'R 12.50',
                },
                {
                  dep: '08:30',
                  arr: '09:05',
                  dur: '35m',
                  line: 'Southern Line',
                  transfers: 0,
                  fare: 'R 12.50',
                },
                {
                  dep: '08:45',
                  arr: '09:30',
                  dur: '45m',
                  line: 'Cape Flats Line',
                  transfers: 1,
                  fare: 'R 12.50',
                },
              ].map((route, i) => (
                <Card
                  key={i}
                  className="hover:border-cyan-500/50 transition-colors cursor-pointer group"
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-xl font-bold text-white">
                            {route.dep}
                          </p>
                        </div>
                        <div className="w-12 h-px bg-slate-700 relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-1 text-[10px] text-slate-500">
                            {route.dur}
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-white">
                            {route.arr}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-cyan-400">{route.fare}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs bg-slate-800"
                        >
                          <Train className="w-3 h-3 mr-1" /> {route.line}
                        </Badge>
                        {route.transfers > 0 && (
                          <span className="text-slate-400 text-xs">
                            {route.transfers} transfer
                          </span>
                        )}
                      </div>
                      <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                        View details &rarr;
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/20">
              <MapPin className="w-12 h-12 text-slate-700 mb-4" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">
                Where to?
              </h3>
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
