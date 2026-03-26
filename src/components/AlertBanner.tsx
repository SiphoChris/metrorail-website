// import { AlertTriangle, Info } from 'lucide-react'
// import { motion } from 'framer-motion'

// export interface AlertType {
//   id: string
//   type: 'warning' | 'info' | 'error'
//   line: string
//   title: string
//   message: string
//   timestamp: string
// }

// export function AlertBanner({
//   alert,
//   index = 0,
// }: {
//   alert: AlertType
//   index?: number
// }) {
//   const styles = {
//     warning: {
//       border: 'border-amber-400/40',
//       bg: 'bg-amber-400/[0.08]',
//       iconColor: 'text-amber-400',
//       badgeBg: 'bg-amber-400/15 text-amber-300 border border-amber-400/30',
//       titleColor: 'text-amber-100',
//     },
//     info: {
//       border: 'border-blue-400/40',
//       bg: 'bg-blue-400/[0.08]',
//       iconColor: 'text-blue-400',
//       badgeBg: 'bg-blue-400/15 text-blue-300 border border-blue-400/30',
//       titleColor: 'text-blue-100',
//     },
//     error: {
//       border: 'border-red-400/40',
//       bg: 'bg-red-400/[0.08]',
//       iconColor: 'text-red-400',
//       badgeBg: 'bg-red-400/15 text-red-300 border border-red-400/30',
//       titleColor: 'text-red-100',
//     },
//   }[alert.type]

//   const Icon = alert.type === 'info' ? Info : AlertTriangle

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: index * 0.1 }}
//       className={`flex gap-4 p-5 rounded-xl border ${styles.border} ${styles.bg}`}
//     >
//       <Icon className={`w-5 h-5 ${styles.iconColor} shrink-0 mt-0.5`} />
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-2 mb-2 flex-wrap">
//           <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles.badgeBg}`}>
//             {alert.line}
//           </span>
//           <span className="text-xs text-slate-400 font-medium">
//             {alert.timestamp}
//           </span>
//         </div>
//         <h4 className={`text-sm font-semibold ${styles.titleColor} mb-1`}>
//           {alert.title}
//         </h4>
//         <p className="text-sm text-slate-400 leading-relaxed">
//           {alert.message}
//         </p>
//       </div>
//     </motion.div>
//   )
// }






import { AlertTriangle, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { Doc, Id } from '../../convex/_generated/dataModel'

// Shape returned by alerts.getActive / alerts.getAll (hydrated)
export type AlertWithLine = Omit<Doc<'alerts'>, 'lineId'> & {
  _id: Id<'alerts'>
  line: Doc<'lines'> | null
}

export function AlertBanner({
  alert,
  index = 0,
}: {
  alert: AlertWithLine
  index?: number
}) {
  const styles = {
    warning: {
      border: 'border-amber-400/40',
      bg: 'bg-amber-400/[0.08]',
      iconColor: 'text-amber-400',
      badgeBg: 'bg-amber-400/15 text-amber-300 border border-amber-400/30',
      titleColor: 'text-amber-100',
    },
    info: {
      border: 'border-blue-400/40',
      bg: 'bg-blue-400/[0.08]',
      iconColor: 'text-blue-400',
      badgeBg: 'bg-blue-400/15 text-blue-300 border border-blue-400/30',
      titleColor: 'text-blue-100',
    },
    error: {
      border: 'border-red-400/40',
      bg: 'bg-red-400/[0.08]',
      iconColor: 'text-red-400',
      badgeBg: 'bg-red-400/15 text-red-300 border border-red-400/30',
      titleColor: 'text-red-100',
    },
  }[alert.type]

  const Icon = alert.type === 'info' ? Info : AlertTriangle

  const timestamp = new Date(alert.updatedAt).toLocaleTimeString('en-ZA', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`flex gap-4 p-5 rounded-xl border ${styles.border} ${styles.bg}`}
    >
      <Icon className={`w-5 h-5 ${styles.iconColor} shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {alert.line && (
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles.badgeBg}`}
            >
              {alert.line.name}
            </span>
          )}
          <span className="text-xs text-slate-400 font-medium">
            Updated {timestamp}
          </span>
        </div>
        <h4 className={`text-sm font-semibold ${styles.titleColor} mb-1`}>
          {alert.title}
        </h4>
        <p className="text-sm text-slate-400 leading-relaxed">{alert.message}</p>
      </div>
    </motion.div>
  )
}