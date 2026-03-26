import { motion } from 'framer-motion'

export interface TrainType {
  line: string
  destination: string
  platform: string
  minutes: number | string
  status: 'on-time' | 'delayed' | 'cancelled'
}

export function TrainDepartureCard({
  train,
  index = 0,
}: {
  train: TrainType
  index?: number
}) {
  const statusConfig = {
    'on-time': {
      label: 'On Time',
      className: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    },
    delayed: {
      label: 'Delayed',
      className: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    },
    cancelled: {
      label: 'Cancelled',
      className: 'bg-red-500/10 text-red-400 border border-red-500/20',
    },
  }

  const status = statusConfig[train.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex items-center gap-4 px-5 py-4 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.04] transition-colors group"
    >
      {/* Minutes */}
      <div className="shrink-0 w-14 text-center">
        {train.status === 'cancelled' ? (
          <span className="text-xl font-black text-red-400">--</span>
        ) : (
          <>
            <span className="text-2xl font-black text-white tabular-nums">
              {train.minutes}
            </span>
            <p className="text-xs text-slate-500 font-medium">min</p>
          </>
        )}
      </div>

      {/* Divider */}
      <div className="w-px h-10 bg-white/10 shrink-0" />

      {/* Destination + Line */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white truncate text-lg group-hover:text-blue-400 transition-colors">
          {train.destination}
        </p>
        <p className="text-xs text-slate-500">{train.line}</p>
      </div>

      {/* Platform + Status */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
            Platform
          </p>
          <p className="font-bold text-blue-400 text-lg tabular-nums">
            {train.platform}
          </p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full w-20 text-center ${status.className}`}>
          {status.label}
        </span>
      </div>
    </motion.div>
  )
}