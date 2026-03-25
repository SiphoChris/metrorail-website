import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fares')({
  component: FaresPage,
})

import { motion } from 'framer-motion'
import { CreditCard, Wallet, Ticket, Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export function FaresPage() {
  const fareZones = [
    {
      zone: 'Zone 1',
      range: '0 - 10 km',
      examples: 'Cape Town to Woodstock, Salt River',
      single: 'R 6.50',
      return: 'R 13.00',
      monthly: 'R 180.00',
    },
    {
      zone: 'Zone 2',
      range: '11 - 20 km',
      examples: 'Cape Town to Wynberg, Langa',
      single: 'R 9.50',
      return: 'R 19.00',
      monthly: 'R 260.00',
    },
    {
      zone: 'Zone 3',
      range: '21 - 30 km',
      examples: 'Cape Town to Retreat, Bellville',
      single: 'R 12.50',
      return: 'R 25.00',
      monthly: 'R 340.00',
    },
    {
      zone: 'Zone 4',
      range: '31+ km',
      examples: "Cape Town to Simon's Town, Khayelitsha",
      single: 'R 16.00',
      return: 'R 32.00',
      monthly: 'R 420.00',
    },
  ]
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
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fares & Tickets
        </h1>
        <p className="text-slate-400">
          Simple, distance-based pricing. Save more when you travel frequently
          with a Metroplus card.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-linear-to-br from-cyan-900/40 to-slate-900 border-cyan-500/30">
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="p-3 bg-cyan-500/20 rounded-full mb-4">
              <CreditCard className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Metroplus Card
            </h3>
            <p className="text-sm text-slate-400 mb-4 flex-1">
              The easiest way to travel. Tap in and out at gates. Get 15% off
              all single fares.
            </p>
            <Badge
              variant="outline"
              className="border-cyan-500/50 text-cyan-400"
            >
              Recommended
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="p-3 bg-slate-800 rounded-full mb-4">
              <Ticket className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Paper Tickets</h3>
            <p className="text-sm text-slate-400 flex-1">
              Available at all station kiosks. Good for once-off journeys. Cash
              only.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            <div className="p-3 bg-slate-800 rounded-full mb-4">
              <Wallet className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Monthly Passes
            </h3>
            <p className="text-sm text-slate-400 flex-1">
              Unlimited travel within your selected zones for a full calendar
              month.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Fare Zones</h2>
      <Card className="overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-900/80 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-medium">Zone</th>
                <th className="px-6 py-4 font-medium">Distance</th>
                <th className="px-6 py-4 font-medium">Examples</th>
                <th className="px-6 py-4 font-medium text-right">Single</th>
                <th className="px-6 py-4 font-medium text-right">Return</th>
                <th className="px-6 py-4 font-medium text-right text-cyan-400">
                  Monthly
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {fareZones.map((zone, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white">
                    {zone.zone}
                  </td>
                  <td className="px-6 py-4 text-slate-400">{zone.range}</td>
                  <td className="px-6 py-4 text-slate-300">{zone.examples}</td>
                  <td className="px-6 py-4 text-right font-medium">
                    {zone.single}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {zone.return}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-cyan-400">
                    {zone.monthly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-sm text-slate-300">
        <Info className="w-5 h-5 text-cyan-400 shrink-0" />
        <p>
          Children under 5 travel free when accompanied by a fare-paying adult.
          Scholars in uniform receive a 50% discount on single and return fares.
        </p>
      </div>
    </motion.div>
  )
}
