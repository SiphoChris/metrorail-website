import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { CreditCard, Wallet, Ticket, Info } from 'lucide-react'

export const Route = createFileRoute('/fares')({
  component: FaresPage,
})

function FaresPage() {
  const fareZones = [
    {
      zone: 'Zone 1',
      range: '0 – 10 km',
      examples: 'Cape Town to Woodstock, Salt River',
      single: 'R 6.50',
      return: 'R 13.00',
      monthly: 'R 180.00',
    },
    {
      zone: 'Zone 2',
      range: '11 – 20 km',
      examples: 'Cape Town to Wynberg, Langa',
      single: 'R 9.50',
      return: 'R 19.00',
      monthly: 'R 260.00',
    },
    {
      zone: 'Zone 3',
      range: '21 – 30 km',
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-5xl"
    >
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fares & Tickets
        </h1>
        <p className="text-slate-400">
          Simple, distance-based pricing. Save more when you travel frequently
          with a Metroplus card.
        </p>
      </div>

      {/* Ticket type cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Metroplus — featured */}
        <div className="rounded-xl border border-blue-400/25 bg-blue-500/[0.08] p-6 flex flex-col items-center text-center">
          <div className="p-3 bg-blue-500/15 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Metroplus Card</h3>
          <p className="text-sm text-slate-400 mb-4 flex-1">
            The easiest way to travel. Tap in and out at gates. Get 15% off
            all single fares.
          </p>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/25">
            Recommended
          </span>
        </div>

        {/* Paper Tickets */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center text-center">
          <div className="p-3 bg-white/5 rounded-full mb-4">
            <Ticket className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Paper Tickets</h3>
          <p className="text-sm text-slate-400 flex-1">
            Available at all station kiosks. Good for once-off journeys. Cash
            only.
          </p>
        </div>

        {/* Monthly Passes */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center text-center">
          <div className="p-3 bg-white/5 rounded-full mb-4">
            <Wallet className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Monthly Passes</h3>
          <p className="text-sm text-slate-400 flex-1">
            Unlimited travel within your selected zones for a full calendar
            month.
          </p>
        </div>
      </div>

      {/* Fare zones table */}
      <h2 className="text-2xl font-bold text-white mb-6">Fare Zones</h2>
      <div className="rounded-xl border border-white/10 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Zone</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Distance</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Examples</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Single</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Return</th>
                <th className="px-6 py-4 text-xs font-semibold text-blue-400 uppercase tracking-wider text-right">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {fareZones.map((zone, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.06] hover:bg-white/[0.04] transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-white">{zone.zone}</td>
                  <td className="px-6 py-4 text-slate-400">{zone.range}</td>
                  <td className="px-6 py-4 text-slate-300">{zone.examples}</td>
                  <td className="px-6 py-4 text-right font-medium text-slate-300">{zone.single}</td>
                  <td className="px-6 py-4 text-right font-medium text-slate-300">{zone.return}</td>
                  <td className="px-6 py-4 text-right font-bold text-blue-400">{zone.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info notice */}
      <div className="flex gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-slate-300">
        <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <p>
          Children under 5 travel free when accompanied by a fare-paying adult.
          Scholars in uniform receive a 50% discount on single and return fares.
        </p>
      </div>
    </motion.div>
  )
}