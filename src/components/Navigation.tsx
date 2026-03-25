import { useState } from 'react'
import { Train, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import type { PageType } from '@/types'
interface NavigationProps {
  currentPage: PageType
  onNavigate: (page: PageType) => void
}
export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const links: Array<{
    page: PageType
    label: string
  }> = [
    {
      page: 'home',
      label: 'Home',
    },
    {
      page: 'schedules',
      label: 'Schedules',
    },
    {
      page: 'alerts',
      label: 'Alerts',
    },
    {
      page: 'fares',
      label: 'Fares',
    },
    {
      page: 'plan',
      label: 'Plan Journey',
    },
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="p-1.5 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
            <Train className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            METRORAIL <span className="text-cyan-400 font-normal">WC</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${currentPage === link.page ? 'text-cyan-400' : 'text-slate-300'}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="md:hidden border-t border-slate-800 bg-slate-900 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-3">
              {links.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page)
                    setIsOpen(false)
                  }}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors text-left ${currentPage === link.page ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
