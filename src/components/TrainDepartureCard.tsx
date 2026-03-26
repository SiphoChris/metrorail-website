import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
    'on-time': { variant: 'success' as const, label: 'On Time' },
    delayed: { variant: 'warning' as const, label: 'Delayed' },
    cancelled: { variant: 'destructive' as const, label: 'Cancelled' },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex items-center gap-4 px-4 py-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors group"
    >
      <div className="shrink-0 w-14 text-center">
        {train.status === 'cancelled' ? (
          <span className="text-xl font-black text-destructive">--</span>
        ) : (
          <>
            <span className="text-2xl font-black text-foreground tabular-nums">
              {train.minutes}
            </span>
            <p className="text-xs text-muted-foreground font-medium">min</p>
          </>
        )}
      </div>

      <Separator orientation="vertical" className="h-10" />

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate text-lg group-hover:text-primary transition-colors">
          {train.destination}
        </p>
        <p className="text-xs text-muted-foreground">{train.line}</p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
            Platform
          </p>
          <p className="font-bold text-primary text-lg">{train.platform}</p>
        </div>
        <Badge variant={statusConfig[train.status].variant} className="w-20 justify-center">
          {statusConfig[train.status].label}
        </Badge>
      </div>
    </motion.div>
  )
}