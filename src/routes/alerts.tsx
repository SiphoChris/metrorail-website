import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Filter, BellRing } from 'lucide-react'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { AlertBanner } from '../components/AlertBanner'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Route = createFileRoute('/alerts')({
  component: AlertsPage,
})

function AlertsPage() {
  const [filter, setFilter] = useState<'all' | 'error' | 'warning' | 'info'>('all')
  const alerts = useQuery(api.alerts.getAll) ?? []

  const filteredAlerts =
    filter === 'all' ? alerts : alerts.filter((a) => a.type === filter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-amber-400" />
            Service Alerts
          </h1>
          <p className="text-slate-400">
            Live updates on disruptions, maintenance, and service changes.
          </p>
        </div>
        <Button
          variant="outline"
          className="gap-2 shrink-0 border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <BellRing className="w-4 h-4" /> Subscribe to Alerts
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-400 shrink-0">
          <Filter className="w-4 h-4" /> Filter:
        </div>
        <Tabs defaultValue="all">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger
              value="all"
              onClick={() => setFilter('all')}
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-400"
            >
              All Updates
            </TabsTrigger>
            <TabsTrigger
              value="error"
              onClick={() => setFilter('error')}
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-slate-400"
            >
              Severe
            </TabsTrigger>
            <TabsTrigger
              value="warning"
              onClick={() => setFilter('warning')}
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white text-slate-400"
            >
              Minor Delays
            </TabsTrigger>
            <TabsTrigger
              value="info"
              onClick={() => setFilter('info')}
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-400"
            >
              General Info
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4" role="table"
              aria-label="Service Alerts">
        {alerts === undefined ? (
          // Loading skeleton
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-xl border border-white/10 bg-white/3 animate-pulse"
            />
          ))
        ) : filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert, i) => (
            <AlertBanner key={alert._id} alert={alert} index={i} />
          ))
        ) : (
          <div className="text-center py-12 bg-white/3 rounded-xl border border-white/10">
            <p className="text-slate-400">No alerts matching this filter.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}