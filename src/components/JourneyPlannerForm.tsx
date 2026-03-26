// import { ArrowRightLeft, Calendar, Clock } from "lucide-react"
// import { Button } from "./ui/button"

// function JourneyPlannerForm(props: { stations: string[], handleSearch: (e: React.FormEvent) => void, isSearching: boolean }) {
//   const { stations, handleSearch, isSearching } = props

//   const selectClass = "w-full h-10 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none appearance-none transition-colors hover:border-white/20"
//   const inputClass = "w-full h-10 rounded-lg border border-white/10 bg-white/5 px-3 pl-10 text-sm text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors hover:border-white/20 [color-scheme:dark]"
//   const labelClass = "text-xs font-medium text-slate-400 mb-1.5 block"

//   return (
//     <form onSubmit={handleSearch} className="space-y-6">
//       <div className="relative space-y-4">
//         {/* Vertical connector line */}
//         <div className="absolute left-[5px] top-9 h-[calc(100%-36px-16px)] w-0.5 bg-white/10 z-0" />

//         {/* From */}
//         <div className="relative z-10 flex gap-4 items-start">
//           <div className="shrink-0 mt-[30px] w-3 h-3 rounded-full border-2 border-blue-400 bg-[#151f33]" />
//           <div className="flex-1">
//             <label className={labelClass}>From Station</label>
//             <select className={selectClass}>
//               <option value="" className="bg-[#1a2744]">Select departure...</option>
//               {stations.map((s) => (
//                 <option key={s} value={s} className="bg-[#1a2744]">{s}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* To */}
//         <div className="relative z-10 flex gap-4 items-start">
//           <div className="shrink-0 mt-[30px] w-3 h-3 rounded-full bg-blue-400" />
//           <div className="flex-1">
//             <label className={labelClass}>To Station</label>
//             <select className={selectClass}>
//               <option value="" className="bg-[#1a2744]">Select destination...</option>
//               {stations.map((s) => (
//                 <option key={s} value={s} className="bg-[#1a2744]">{s}</option>
//               ))}
//             </select>
//           </div>
//           <Button
//             type="button"
//             variant="ghost"
//             size="icon"
//             className="shrink-0 mt-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
//           >
//             <ArrowRightLeft className="w-4 h-4 rotate-90" />
//           </Button>
//         </div>
//       </div>

//       {/* Date + Time */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
//         <div>
//           <label className={labelClass}>Date</label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
//             <input
//               type="date"
//               className={inputClass}
//               defaultValue={new Date().toISOString().split('T')[0]}
//             />
//           </div>
//         </div>
//         <div>
//           <label className={labelClass}>Time</label>
//           <div className="relative">
//             <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
//             <input
//               type="time"
//               className={inputClass}
//               defaultValue="08:00"
//             />
//           </div>
//         </div>
//       </div>

//       <Button
//         type="submit"
//         disabled={isSearching}
//         className="w-full h-12 text-base font-bold bg-blue-500 hover:bg-blue-400 text-white border-0 transition-colors disabled:opacity-50"
//       >
//         {isSearching ? 'Searching...' : 'Show Routes'}
//       </Button>
//     </form>
//   )
// }

// export default JourneyPlannerForm









import { ArrowRightLeft, Calendar, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Doc } from '../../convex/_generated/dataModel'

interface Props {
  stations: Doc<'stations'>[]
  handleSearch: (e: React.FormEvent) => void
  isSearching: boolean
}

function JourneyPlannerForm({ stations, handleSearch, isSearching }: Props) {
  const selectClass =
    'w-full h-10 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none appearance-none transition-colors hover:border-white/20'
  const inputClass =
    'w-full h-10 rounded-lg border border-white/10 bg-white/5 px-3 pl-10 text-sm text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors hover:border-white/20 [color-scheme:dark]'
  const labelClass = 'text-xs font-medium text-slate-400 mb-1.5 block'

  return (
    <form onSubmit={handleSearch} className="space-y-6">
      <div className="relative space-y-4">
        {/* Vertical connector line */}
        <div className="absolute left-[5px] top-9 h-[calc(100%-36px-16px)] w-0.5 bg-white/10 z-0" />

        {/* From */}
        <div className="relative z-10 flex gap-4 items-start">
          <div className="shrink-0 mt-[30px] w-3 h-3 rounded-full border-2 border-blue-400 bg-[#151f33]" />
          <div className="flex-1">
            <label className={labelClass}>From Station</label>
            <select className={selectClass} name="from">
              <option value="" className="bg-[#1a2744]">
                Select departure...
              </option>
              {stations.map((s) => (
                <option key={s._id} value={s._id} className="bg-[#1a2744]">
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* To */}
        <div className="relative z-10 flex gap-4 items-start">
          <div className="shrink-0 mt-[30px] w-3 h-3 rounded-full bg-blue-400" />
          <div className="flex-1">
            <label className={labelClass}>To Station</label>
            <select className={selectClass} name="to">
              <option value="" className="bg-[#1a2744]">
                Select destination...
              </option>
              {stations.map((s) => (
                <option key={s._id} value={s._id} className="bg-[#1a2744]">
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 mt-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowRightLeft className="w-4 h-4 rotate-90" />
          </Button>
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div>
          <label className={labelClass}>Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              type="date"
              name="date"
              className={inputClass}
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              type="time"
              name="time"
              className={inputClass}
              defaultValue="08:00"
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSearching}
        className="w-full h-12 text-base font-bold bg-blue-500 hover:bg-blue-400 text-white border-0 transition-colors disabled:opacity-50"
      >
        {isSearching ? 'Searching...' : 'Show Routes'}
      </Button>
    </form>
  )
}

export default JourneyPlannerForm