// import { createFileRoute } from '@tanstack/react-router'
// import { Badge } from '@/components/ui/badge'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Separator } from '@/components/ui/separator'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Train, Clock, MapPin, AlertTriangle, Info, ChevronRight, Wifi, CreditCard, Shield } from 'lucide-react'
// import HeroSection from '@/components/sections/HeroSection'
// import Footer from '@/components/Footer'

// export const Route = createFileRoute('/')({ component: App })

// const nextTrains = [
//   { line: 'Southern Line', destination: 'Simon\'s Town', platform: '4', minutes: 4, status: 'on-time' },
//   { line: 'Cape Flats Line', destination: 'Chris Hani', platform: '2', minutes: 11, status: 'delayed' },
//   { line: 'Northern Line', destination: 'Bellville', platform: '6', minutes: 18, status: 'on-time' },
//   { line: 'Southern Line', destination: 'Retreat', platform: '4', minutes: 22, status: 'on-time' },
//   { line: 'Central Line', destination: 'Khayelitsha', platform: '3', minutes: 27, status: 'cancelled' },
// ]

// const serviceAlerts = [
//   { type: 'warning', line: 'Cape Flats Line', message: 'Delays of up to 15 minutes between Langa and Bellville due to signal maintenance.' },
//   { type: 'info', line: 'Southern Line', message: 'Additional peak-hour services added between Cape Town and Wynberg.' },
//   { type: 'error', line: 'Central Line', message: 'No service between Mutual and Khayelitsha. Rail replacement buses in operation.' },
// ]

// const popularRoutes = [
//   { from: 'Cape Town', to: 'Wynberg', duration: '22 min', price: 'R 9.50' },
//   { from: 'Cape Town', to: 'Simon\'s Town', duration: '68 min', price: 'R 18.00' },
//   { from: 'Cape Town', to: 'Bellville', duration: '35 min', price: 'R 12.50' },
//   { from: 'Cape Town', to: 'Khayelitsha', duration: '45 min', price: 'R 14.00' },
// ]

// const statusColor = {
//   'on-time': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
//   'delayed': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
//   'cancelled': 'bg-red-500/10 text-red-400 border-red-500/20',
// }

// const statusLabel = {
//   'on-time': 'On Time',
//   'delayed': 'Delayed',
//   'cancelled': 'Cancelled',
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
//       <HeroSection />

//       {/* Next Trains */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
//             <Clock className="w-5 h-5 text-cyan-400" />
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-white">Next Departures</h2>
//             <p className="text-sm text-gray-400">Cape Town Station &mdash; live updates</p>
//           </div>
//           <Badge className="ml-auto bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
//             Live
//           </Badge>
//         </div>

//         <Card className="bg-slate-800/60 border-slate-700 overflow-hidden">
//           <div className="divide-y divide-slate-700/60">
//             {nextTrains.map((train, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-4 px-4 py-4 hover:bg-slate-700/30 transition-colors"
//               >
//                 <div className="shrink-0 w-14 text-center">
//                   <span className="text-2xl font-black text-white tabular-nums">
//                     {train.minutes}
//                   </span>
//                   <p className="text-xs text-gray-500">min</p>
//                 </div>

//                 <Separator orientation="vertical" className="h-10 bg-slate-600" />

//                 <div className="flex-1 min-w-0">
//                   <p className="font-semibold text-white truncate">{train.destination}</p>
//                   <p className="text-xs text-gray-400">{train.line}</p>
//                 </div>

//                 <div className="flex items-center gap-3 shrink-0">
//                   <div className="text-right hidden sm:block">
//                     <p className="text-xs text-gray-500">Platform</p>
//                     <p className="font-bold text-cyan-400">{train.platform}</p>
//                   </div>
//                   <Badge
//                     variant="outline"
//                     className={`text-xs border ${statusColor[train.status as keyof typeof statusColor]}`}
//                   >
//                     {statusLabel[train.status as keyof typeof statusLabel]}
//                   </Badge>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </section>

//       {/* Service Alerts */}
//       <section className="py-4 px-4 max-w-5xl mx-auto">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
//             <AlertTriangle className="w-5 h-5 text-amber-400" />
//           </div>
//           <h2 className="text-xl font-bold text-white">Service Alerts</h2>
//         </div>

//         <div className="space-y-3">
//           {serviceAlerts.map((alert, i) => {
//             const styles = {
//               warning: { border: 'border-amber-500/20 bg-amber-500/5', icon: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />, badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
//               info: { border: 'border-cyan-500/20 bg-cyan-500/5', icon: <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />, badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
//               error: { border: 'border-red-500/20 bg-red-500/5', icon: <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />, badge: 'bg-red-500/10 text-red-400 border-red-500/20' },
//             }[alert.type]

//             return (
//               <div key={i} className={`flex gap-3 p-4 rounded-xl border ${styles?.border}`}>
//                 {styles?.icon}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-1 flex-wrap">
//                     <Badge variant="outline" className={`text-xs border ${styles?.badge}`}>
//                       {alert.line}
//                     </Badge>
//                   </div>
//                   <p className="text-sm text-gray-300">{alert.message}</p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </section>

//       {/* Popular Routes + Plan Journey */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <Tabs defaultValue="routes">
//           <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
//                 <MapPin className="w-5 h-5 text-purple-400" />
//               </div>
//               <h2 className="text-xl font-bold text-white">Travel Info</h2>
//             </div>
//             <TabsList className="bg-slate-800 border border-slate-700">
//               <TabsTrigger value="routes" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-400 text-sm">
//                 Popular Routes
//               </TabsTrigger>
//               <TabsTrigger value="fares" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-400 text-sm">
//                 Fares
//               </TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="routes">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {popularRoutes.map((route, i) => (
//                 <Card key={i} className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer group">
//                   <CardContent className="flex items-center gap-4 p-4">
//                     <Train className="w-8 h-8 text-cyan-400 shrink-0" />
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 text-sm font-semibold text-white">
//                         <span>{route.from}</span>
//                         <ChevronRight className="w-3 h-3 text-gray-500" />
//                         <span>{route.to}</span>
//                       </div>
//                       <p className="text-xs text-gray-400 mt-0.5">{route.duration} &bull; from {route.price}</p>
//                     </div>
//                     <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors shrink-0" />
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="fares">
//             <Card className="bg-slate-800/60 border-slate-700">
//               <CardHeader>
//                 <CardTitle className="text-white text-base">Fare Zones</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3 text-sm">
//                 {[
//                   { zone: 'Zone 1', range: 'Within Cape Town CBD', price: 'R 6.50 – R 9.50' },
//                   { zone: 'Zone 2', range: 'Cape Town to Southern Suburbs', price: 'R 9.50 – R 12.50' },
//                   { zone: 'Zone 3', range: 'Cape Town to Cape Flats', price: 'R 12.50 – R 16.00' },
//                   { zone: 'Zone 4', range: 'Cape Town to Simon\'s Town / Bellville', price: 'R 16.00 – R 22.00' },
//                 ].map((z, i) => (
//                   <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
//                     <div>
//                       <p className="font-medium text-white">{z.zone}</p>
//                       <p className="text-xs text-gray-400">{z.range}</p>
//                     </div>
//                     <span className="text-cyan-400 font-semibold">{z.price}</span>
//                   </div>
//                 ))}
//                 <p className="text-xs text-gray-500 pt-2">* Metroplus card holders receive a 15% discount on all fares.</p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </section>

//       {/* Features strip */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           {[
//             { icon: <CreditCard className="w-6 h-6 text-cyan-400" />, title: 'Tap-to-Ride', desc: 'RFID card payments at every gate. No queues, no cash.' },
//             { icon: <Wifi className="w-6 h-6 text-cyan-400" />, title: 'Live Updates', desc: 'Real-time arrivals and service alerts across all lines.' },
//             { icon: <Shield className="w-6 h-6 text-cyan-400" />, title: 'Safe Travel', desc: 'Security personnel deployed at all major stations.' },
//           ].map((f, i) => (
//             <div key={i} className="flex gap-4 p-5 rounded-xl bg-slate-800/40 border border-slate-700/60">
//               <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 h-fit">
//                 {f.icon}
//               </div>
//               <div>
//                 <p className="font-semibold text-white mb-1">{f.title}</p>
//                 <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }



import { createFileRoute } from '@tanstack/react-router'
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
import { Card, CardContent } from '@/components/ui/card'
import { TrainDepartureCard, TrainType } from '../components/TrainDepartureCard'
import { AlertBanner, AlertType } from '../components/AlertBanner'
import { motion } from 'framer-motion'
import type { PageType } from '@/types'


export const Route = createFileRoute('/')({ component: HomePage })


const nextTrains: TrainType[] = [
  {
    line: 'Southern Line',
    destination: "Simon's Town",
    platform: '4',
    minutes: 4,
    status: 'on-time',
  },
  {
    line: 'Cape Flats Line',
    destination: 'Chris Hani',
    platform: '2',
    minutes: 11,
    status: 'delayed',
  },
  {
    line: 'Northern Line',
    destination: 'Bellville',
    platform: '6',
    minutes: 18,
    status: 'on-time',
  },
  {
    line: 'Southern Line',
    destination: 'Retreat',
    platform: '4',
    minutes: 22,
    status: 'on-time',
  },
  {
    line: 'Central Line',
    destination: 'Khayelitsha',
    platform: '3',
    minutes: 27,
    status: 'cancelled',
  },
]
const serviceAlerts: AlertType[] = [
  {
    id: '1',
    type: 'warning',
    line: 'Cape Flats Line',
    title: 'Signal Maintenance',
    message:
      'Delays of up to 15 minutes between Langa and Bellville due to signal maintenance.',
    timestamp: 'Updated 10m ago',
  },
  {
    id: '2',
    type: 'error',
    line: 'Central Line',
    title: 'Service Suspended',
    message:
      'No service between Mutual and Khayelitsha. Rail replacement buses in operation.',
    timestamp: 'Updated 1h ago',
  },
]
const popularRoutes = [
  {
    from: 'Cape Town',
    to: 'Wynberg',
    duration: '22 min',
    price: 'R 9.50',
  },
  {
    from: 'Cape Town',
    to: "Simon's Town",
    duration: '68 min',
    price: 'R 18.00',
  },
  {
    from: 'Cape Town',
    to: 'Bellville',
    duration: '35 min',
    price: 'R 12.50',
  },
  {
    from: 'Cape Town',
    to: 'Khayelitsha',
    duration: '45 min',
    price: 'R 14.00',
  },
]
interface HomePageProps {
  onNavigate: (page: PageType) => void
}
function HomePage({ onNavigate }: HomePageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-900/20 to-slate-900 pointer-events-none" />
        <Train
          className="absolute -left-16 -bottom-10 text-white/5 rotate-12"
          style={{
            width: 420,
            height: 420,
          }}
        />
        <Train
          className="hidden md:block absolute -right-20 -top-10 text-white/5 -rotate-12"
          style={{
            width: 380,
            height: 380,
          }}
        />

        <div className="relative max-w-4xl mx-auto z-10">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-cyan-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System operating normally
          </motion.div>

          <motion.h1
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6"
          >
            Your journey starts{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              here.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Fast, reliable commuter rail service connecting the heart of Cape
            Town to its vibrant suburbs.
          </motion.p>
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
                  <h2 className="text-xl font-bold text-white">
                    Live Departures
                  </h2>
                  <p className="text-sm text-slate-400">Cape Town Station</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('schedules')}
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                Full schedule <ChevronRight className="w-4 h-4" />
              </button>
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
              <button
                onClick={() => onNavigate('alerts')}
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                View all <ChevronRight className="w-4 h-4" />
              </button>
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
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                >
                  <button onClick={() => onNavigate('plan')} className="w-full">
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
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-slate-800/30 rounded-2xl p-6 border border-slate-800">
            <h3 className="font-semibold text-white mb-4">Why ride with us?</h3>
            <div className="space-y-4">
              {[
                {
                  icon: <CreditCard className="w-5 h-5 text-cyan-400" />,
                  title: 'Tap-to-Ride',
                  desc: 'RFID card payments at every gate.',
                },
                {
                  icon: <Wifi className="w-5 h-5 text-cyan-400" />,
                  title: 'Live Updates',
                  desc: 'Real-time arrivals and alerts.',
                },
                {
                  icon: <Shield className="w-5 h-5 text-cyan-400" />,
                  title: 'Safe Travel',
                  desc: 'Security personnel at stations.',
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5">{f.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      {f.title}
                    </p>
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
