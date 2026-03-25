import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Train, Clock, MapPin, AlertTriangle, Info, ChevronRight, Wifi, CreditCard, Shield } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({ component: App })

const nextTrains = [
  { line: 'Southern Line', destination: 'Simon\'s Town', platform: '4', minutes: 4, status: 'on-time' },
  { line: 'Cape Flats Line', destination: 'Chris Hani', platform: '2', minutes: 11, status: 'delayed' },
  { line: 'Northern Line', destination: 'Bellville', platform: '6', minutes: 18, status: 'on-time' },
  { line: 'Southern Line', destination: 'Retreat', platform: '4', minutes: 22, status: 'on-time' },
  { line: 'Central Line', destination: 'Khayelitsha', platform: '3', minutes: 27, status: 'cancelled' },
]

const serviceAlerts = [
  { type: 'warning', line: 'Cape Flats Line', message: 'Delays of up to 15 minutes between Langa and Bellville due to signal maintenance.' },
  { type: 'info', line: 'Southern Line', message: 'Additional peak-hour services added between Cape Town and Wynberg.' },
  { type: 'error', line: 'Central Line', message: 'No service between Mutual and Khayelitsha. Rail replacement buses in operation.' },
]

const popularRoutes = [
  { from: 'Cape Town', to: 'Wynberg', duration: '22 min', price: 'R 9.50' },
  { from: 'Cape Town', to: 'Simon\'s Town', duration: '68 min', price: 'R 18.00' },
  { from: 'Cape Town', to: 'Bellville', duration: '35 min', price: 'R 12.50' },
  { from: 'Cape Town', to: 'Khayelitsha', duration: '45 min', price: 'R 14.00' },
]

const statusColor = {
  'on-time': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'delayed': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'cancelled': 'bg-red-500/10 text-red-400 border-red-500/20',
}

const statusLabel = {
  'on-time': 'On Time',
  'delayed': 'Delayed',
  'cancelled': 'Cancelled',
}

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <HeroSection />

      {/* Next Trains */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <Clock className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Next Departures</h2>
            <p className="text-sm text-gray-400">Cape Town Station &mdash; live updates</p>
          </div>
          <Badge className="ml-auto bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
            Live
          </Badge>
        </div>

        <Card className="bg-slate-800/60 border-slate-700 overflow-hidden">
          <div className="divide-y divide-slate-700/60">
            {nextTrains.map((train, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-4 py-4 hover:bg-slate-700/30 transition-colors"
              >
                <div className="shrink-0 w-14 text-center">
                  <span className="text-2xl font-black text-white tabular-nums">
                    {train.minutes}
                  </span>
                  <p className="text-xs text-gray-500">min</p>
                </div>

                <Separator orientation="vertical" className="h-10 bg-slate-600" />

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate">{train.destination}</p>
                  <p className="text-xs text-gray-400">{train.line}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-gray-500">Platform</p>
                    <p className="font-bold text-cyan-400">{train.platform}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs border ${statusColor[train.status as keyof typeof statusColor]}`}
                  >
                    {statusLabel[train.status as keyof typeof statusLabel]}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Service Alerts */}
      <section className="py-4 px-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
          <h2 className="text-xl font-bold text-white">Service Alerts</h2>
        </div>

        <div className="space-y-3">
          {serviceAlerts.map((alert, i) => {
            const styles = {
              warning: { border: 'border-amber-500/20 bg-amber-500/5', icon: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />, badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
              info: { border: 'border-cyan-500/20 bg-cyan-500/5', icon: <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />, badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
              error: { border: 'border-red-500/20 bg-red-500/5', icon: <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />, badge: 'bg-red-500/10 text-red-400 border-red-500/20' },
            }[alert.type]

            return (
              <div key={i} className={`flex gap-3 p-4 rounded-xl border ${styles?.border}`}>
                {styles?.icon}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Badge variant="outline" className={`text-xs border ${styles?.badge}`}>
                      {alert.line}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-300">{alert.message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Popular Routes + Plan Journey */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <Tabs defaultValue="routes">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Travel Info</h2>
            </div>
            <TabsList className="bg-slate-800 border border-slate-700">
              <TabsTrigger value="routes" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-400 text-sm">
                Popular Routes
              </TabsTrigger>
              <TabsTrigger value="fares" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-400 text-sm">
                Fares
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="routes">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {popularRoutes.map((route, i) => (
                <Card key={i} className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer group">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Train className="w-8 h-8 text-cyan-400 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <span>{route.from}</span>
                        <ChevronRight className="w-3 h-3 text-gray-500" />
                        <span>{route.to}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{route.duration} &bull; from {route.price}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fares">
            <Card className="bg-slate-800/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-base">Fare Zones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {[
                  { zone: 'Zone 1', range: 'Within Cape Town CBD', price: 'R 6.50 – R 9.50' },
                  { zone: 'Zone 2', range: 'Cape Town to Southern Suburbs', price: 'R 9.50 – R 12.50' },
                  { zone: 'Zone 3', range: 'Cape Town to Cape Flats', price: 'R 12.50 – R 16.00' },
                  { zone: 'Zone 4', range: 'Cape Town to Simon\'s Town / Bellville', price: 'R 16.00 – R 22.00' },
                ].map((z, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
                    <div>
                      <p className="font-medium text-white">{z.zone}</p>
                      <p className="text-xs text-gray-400">{z.range}</p>
                    </div>
                    <span className="text-cyan-400 font-semibold">{z.price}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-500 pt-2">* Metroplus card holders receive a 15% discount on all fares.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features strip */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <CreditCard className="w-6 h-6 text-cyan-400" />, title: 'Tap-to-Ride', desc: 'RFID card payments at every gate. No queues, no cash.' },
            { icon: <Wifi className="w-6 h-6 text-cyan-400" />, title: 'Live Updates', desc: 'Real-time arrivals and service alerts across all lines.' },
            { icon: <Shield className="w-6 h-6 text-cyan-400" />, title: 'Safe Travel', desc: 'Security personnel deployed at all major stations.' },
          ].map((f, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl bg-slate-800/40 border border-slate-700/60">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 h-fit">
                {f.icon}
              </div>
              <div>
                <p className="font-semibold text-white mb-1">{f.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}