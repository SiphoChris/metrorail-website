import { ArrowRightLeft, Calendar, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

function JourneyPlannerForm(props: { stations: string[], handleSearch: (e: React.FormEvent) => void, isSearching: boolean }) {
  const { stations, handleSearch, isSearching } = props

  return (
    <form onSubmit={handleSearch} className="space-y-6">
      <div className="relative space-y-4">
        <div className="absolute left-1/100 top-9 h-[calc(100%-36px-26px)] w-0.5 bg-slate-700 z-0" />

        {/* From */}
        <div className="relative z-10 flex gap-4">
          <div className="shrink-0 mt-7.5 w-3 h-3 rounded-full border-2 border-cyan-400 bg-slate-900" />
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-400 mb-1 block">From Station</label>
            <select className="w-full h-10 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 focus:ring-1 focus:ring-cyan-400 outline-none appearance-none">
              <option value="">Select departure...</option>
              {stations.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* To */}
        <div className="relative z-10 flex gap-4">
          <div className="shrink-0 mt-7.5 w-3 h-3 rounded-full bg-cyan-400" />
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-400 mb-1 block">To Station</label>
            <select className="w-full h-10 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 focus:ring-1 focus:ring-cyan-400 outline-none appearance-none">
              <option value="">Select destination...</option>
              {stations.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full bg-slate-800 border-slate-700 shrink-0 mt-6"
          >
            <ArrowRightLeft className="w-4 h-4 rotate-90" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
        <div>
          <label className="text-xs font-medium text-slate-400 mb-1 block">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input type="date" className="pl-10" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-400 mb-1 block">Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input type="time" className="pl-10" defaultValue="08:00" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full h-12 text-base font-bold" disabled={isSearching}>
        {isSearching ? 'Searching...' : 'Show Routes'}
      </Button>
    </form>
  )
}

export default JourneyPlannerForm