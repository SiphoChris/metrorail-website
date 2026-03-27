import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  MapPin,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header({className}: {className?: string}) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Gauteng', icon: <MapPin size={20} />, to: '/' },
    { name: 'KwaZulu Natal', icon: <MapPin size={20} />, to: '/' },
  ]

  return (
    <>
      <header className={cn(`py-2 px-2 md:px-8 flex gap-4 items-center justify-between bg-gray-800 text-white shadow-lg`, className)}>
        <h1 className="text-xl font-semibold">
          <Link to="/">
            <img
              src="/metrorail-logo.png"
              alt="Metrorail Logo"
              aria-label='logo'
              className="h-12 md:h-14"
            />
          </Link>
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

     <aside
  className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-200 transform transition-transform duration-300 ease-in-out flex flex-col ${
    isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
  }`}
>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Regions</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center gap-2 text-lg font-medium hover:bg-gray-800 rounded-lg p-2 transition-colors"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.icon}
                  {item.name} (coming soon)
                </Link>
              </li>
          ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}