import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Train,
  Clock,
  AlertTriangle,
  MapPin,
  ChevronRight,
  Wifi,
  CreditCard,
  Shield,
} from 'lucide-react'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Id } from '../../convex/_generated/dataModel'
import { TrainDepartureCard, UpcomingTrain } from '../components/TrainDepartureCard'
import { AlertBanner } from '../components/AlertBanner'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({ component: HomePage })

// Cape Town station slug — change if your slug differs
const CAPE_TOWN_SLUG = 'cape-town'

function getDayType(): 'weekday' | 'weekend' {
  const day = new Date().getDay()
  return day === 0 || day === 6 ? 'weekend' : 'weekday'
}

function getCurrentTime(): string {
  const now = new Date()
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
}

function minutesUntil(departureTime: string): number {
  const [h, m] = departureTime.split(':').map(Number)
  const now = new Date()
  const depMins = h * 60 + m
  const nowMins = now.getHours() * 60 + now.getMinutes()
  return Math.max(0, depMins - nowMins)
}

function HomePage() {
  const allStations = useQuery(api.stations.getActive) ?? []
  const capeTown = allStations.find((s) => s.slug === CAPE_TOWN_SLUG)

  const upcomingRaw = useQuery(
    api.schedules.getUpcoming,
    capeTown
      ? {
          fromStationId: capeTown._id as Id<'stations'>,
          afterTime: getCurrentTime(),
          dayType: getDayType(),
          limit: 5,
        }
      : 'skip',
  ) ?? []

  // Attach minutesUntil + mock status (will be real once you have a status field)
  const nextTrains: UpcomingTrain[] = upcomingRaw.map((t) => ({
    ...t,
    minutesUntil: minutesUntil(t.departureTime),
    status: 'on-time' as const,
  }))

  const serviceAlerts = useQuery(api.alerts.getActive) ?? []

  const popularRoutes = [
    { from: 'Cape Town', to: 'Wynberg', duration: '22 min', price: 'R 9.50' },
    { from: 'Cape Town', to: "Simon's Town", duration: '68 min', price: 'R 18.00' },
    { from: 'Cape Town', to: 'Bellville', duration: '35 min', price: 'R 12.50' },
    { from: 'Cape Town', to: 'Khayelitsha', duration: '45 min', price: 'R 14.00' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen"
    >
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden border-b border-white/6">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <Train
          className="absolute -left-16 -bottom-10 text-white/4 rotate-12"
          style={{ width: 420, height: 420 }}
        />
        <Train
          className="hidden md:block absolute -right-20 -top-10 text-white/4 -rotate-12"
          style={{ width: 380, height: 380 }}
        />

        <div className="relative max-w-4xl mx-auto z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6"
          >
            Your journey starts{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              here.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Fast, reliable commuter rail service connecting the heart of Cape
            Town to its vibrant suburbs.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/journey-planner"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
            >
              Plan a Journey
            </Link>
            <Link
              to="/schedules"
              className="px-6 py-3 border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
            >
              View Schedules
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto w-full px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Departures & Alerts */}
        <div className="lg:col-span-2 space-y-10">

          {/* Live Departures */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Outbound Departures
                  </h2>
                  <p className="text-sm text-slate-400">Cape Town Station</p>
                </div>
              </div>
              <Link
                to="/schedules"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                Full schedule <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 overflow-hidden">
              {nextTrains.length === 0 ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-16 border-b border-white/6 last:border-0 bg-white/2 animate-pulse"
                  />
                ))
              ) : (
                <div className="flex flex-col">
                  {nextTrains.map((train, i) => (
                    <TrainDepartureCard key={train._id} train={train} index={i} />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Service Alerts */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Service Alerts</h2>
              </div>
              <Link
                to="/alerts"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {serviceAlerts.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No active alerts.
                </div>
              ) : (
                serviceAlerts.slice(0, 2).map((alert, i) => (
                  <AlertBanner key={alert._id} alert={alert} index={i} />
                ))
              )}
            </div>
          </section>
        </div>

        {/* Right: Popular Routes & Features */}
        <div className="space-y-10">
          {/* Popular Routes */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Popular Routes</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {popularRoutes.map((route, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to="/journey-planner" className="w-full block">
                    <div className="group rounded-xl border border-white/10 bg-white/3 hover:border-blue-400/40 hover:bg-blue-500/3 transition-colors cursor-pointer p-4 flex items-center gap-4">
                      <Train className="w-8 h-8 text-white/15 group-hover:text-blue-400 transition-colors shrink-0" />
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <span>{route.from}</span>
                          <ChevronRight className="w-3 h-3 text-slate-500" />
                          <span>{route.to}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {route.duration} &bull; from {route.price}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/15 group-hover:text-blue-400 transition-colors shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why ride with us
          <section className="rounded-2xl p-6 border border-white/10 bg-white/3">
            <h3 className="font-semibold text-white mb-4">Why ride with us?</h3>
            <div className="space-y-4">
              {[
                {
                  icon: <CreditCard className="w-5 h-5 text-blue-400" />,
                  title: 'Tap-to-Ride',
                  desc: 'RFID card payments at every gate.',
                },
                {
                  icon: <Wifi className="w-5 h-5 text-blue-400" />,
                  title: 'Live Updates',
                  desc: 'Real-time arrivals and alerts.',
                },
                {
                  icon: <Shield className="w-5 h-5 text-blue-400" />,
                  title: 'Safe Travel',
                  desc: 'Security personnel at stations.',
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      {f.title}
                    </p>
                    <p className="text-xs text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* Safety Tips */}
          <section className="rounded-2xl p-6 border border-white/10 bg-white/3">
            <h3 className="font-semibold text-white mb-4">Safety Tips</h3>
            <div className="space-y-4">
              {[
                'Keep your belongings secure and be aware of your surroundings.',
                'Make sure the doors close behind you when boarding.',
                'Be aware of the platform gap and wait for the train to come to a complete stop before boarding.',
                'Report any suspicious activity to station staff or security personnel.',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mt-1" />
                  <p className="text-sm text-slate-400">{tip}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  )
}