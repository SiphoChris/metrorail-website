import { createFileRoute, Link } from '@tanstack/react-router'
import { Train, Clock, AlertTriangle, MapPin, ChevronRight, Wifi, CreditCard, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrainDepartureCard, TrainType } from '../components/TrainDepartureCard'
import { AlertBanner, AlertType } from '../components/AlertBanner'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({ component: HomePage })

const nextTrains: TrainType[] = [
  { line: 'Southern Line', destination: "Simon's Town", platform: '4', minutes: 4, status: 'on-time' },
  { line: 'Cape Flats Line', destination: 'Chris Hani', platform: '2', minutes: 11, status: 'delayed' },
  { line: 'Northern Line', destination: 'Bellville', platform: '6', minutes: 18, status: 'on-time' },
  { line: 'Southern Line', destination: 'Retreat', platform: '4', minutes: 22, status: 'on-time' },
  { line: 'Central Line', destination: 'Khayelitsha', platform: '3', minutes: 27, status: 'cancelled' },
]

const serviceAlerts: AlertType[] = [
  {
    id: '1',
    type: 'warning',
    line: 'Cape Flats Line',
    title: 'Signal Maintenance',
    message: 'Delays of up to 15 minutes between Langa and Bellville due to signal maintenance.',
    timestamp: 'Updated 10m ago',
  },
  {
    id: '2',
    type: 'error',
    line: 'Central Line',
    title: 'Service Suspended',
    message: 'No service between Mutual and Khayelitsha. Rail replacement buses in operation.',
    timestamp: 'Updated 1h ago',
  },
]

const popularRoutes = [
  { from: 'Cape Town', to: 'Wynberg', duration: '22 min', price: 'R 9.50' },
  { from: 'Cape Town', to: "Simon's Town", duration: '68 min', price: 'R 18.00' },
  { from: 'Cape Town', to: 'Bellville', duration: '35 min', price: 'R 12.50' },
  { from: 'Cape Town', to: 'Khayelitsha', duration: '45 min', price: 'R 14.00' },
]

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-900/20 to-slate-900 pointer-events-none" />
        <Train
          className="absolute -left-16 -bottom-10 text-white/5 rotate-12"
          style={{ width: 420, height: 420 }}
        />
        <Train
          className="hidden md:block absolute -right-20 -top-10 text-white/5 -rotate-12"
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              here.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Fast, reliable commuter rail service connecting the heart of Cape Town to its vibrant suburbs.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/journey-planner"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/25"
            >
              Plan a Journey
            </Link>
            <Link
              to="/schedules"
              className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
            >
              View Schedules
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto w-full px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Departures & Alerts */}
        <div className="lg:col-span-2 space-y-10">
          {/* Next Departures */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Live Departures</h2>
                  <p className="text-sm text-slate-400">Cape Town Station</p>
                </div>
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
                Live
              </Badge>
              <Link
                to="/schedules"
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                Full schedule <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <Card className="overflow-hidden">
              <div className="flex flex-col">
                {nextTrains.map((train, i) => (
                  <TrainDepartureCard key={i} train={train} index={i} />
                ))}
              </div>
            </Card>
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
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {serviceAlerts.map((alert, i) => (
                <AlertBanner key={alert.id} alert={alert} index={i} />
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Popular Routes & Features */}
        <div className="space-y-10">
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
                    <Card className="hover:border-cyan-500/40 transition-colors cursor-pointer group bg-slate-800/40">
                      <CardContent className="flex items-center gap-4 p-4">
                        <Train className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
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
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-slate-800/30 rounded-2xl p-6 border border-slate-800">
            <h3 className="font-semibold text-white mb-4">Why ride with us?</h3>
            <div className="space-y-4">
              {[
                { icon: <CreditCard className="w-5 h-5 text-cyan-400" />, title: 'Tap-to-Ride', desc: 'RFID card payments at every gate.' },
                { icon: <Wifi className="w-5 h-5 text-cyan-400" />, title: 'Live Updates', desc: 'Real-time arrivals and alerts.' },
                { icon: <Shield className="w-5 h-5 text-cyan-400" />, title: 'Safe Travel', desc: 'Security personnel at stations.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5">{f.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{f.title}</p>
                    <p className="text-xs text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  )
}