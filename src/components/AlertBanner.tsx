import { AlertTriangle, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
export interface AlertType {
  id: string
  type: 'warning' | 'info' | 'error'
  line: string
  title: string
  message: string
  timestamp: string
}
export function AlertBanner({
  alert,
  index = 0,
}: {
  alert: AlertType
  index?: number
}) {
  const styles = {
    warning: {
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
      icon: (
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
      ),
      badge: 'warning' as const,
    },
    info: {
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/5',
      icon: <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />,
      badge: 'outline' as const,
    },
    error: {
      border: 'border-red-500/20',
      bg: 'bg-red-500/5',
      icon: <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />,
      badge: 'destructive' as const,
    },
  }[alert.type]
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: index * 0.1,
      }}
      className={`flex gap-4 p-5 rounded-xl border ${styles.border} ${styles.bg}`}
    >
      {styles.icon}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Badge variant={styles.badge}>{alert.line}</Badge>
          <span className="text-xs text-slate-500 font-medium">
            {alert.timestamp}
          </span>
        </div>
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          {alert.title}
        </h4>
        <p className="text-sm text-slate-400 leading-relaxed">
          {alert.message}
        </p>
      </div>
    </motion.div>
  )
}
