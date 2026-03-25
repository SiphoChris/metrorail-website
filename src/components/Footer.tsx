import { Train, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Train size={20} className="text-cyan-400" />
            <span className="text-white font-bold text-lg">Metrorail Western Cape</span>
          </div>
          <p className="text-sm leading-relaxed">
            A division of PRASA, dedicated to providing safe, reliable, and efficient commuter rail services across Cape Town and its suburbs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How it works</a></li>
            <li><a href="https://www.prasa.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">PRASA</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Timetables</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Station map</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400 shrink-0" />
              <a href="mailto:info@metrorail.co.za" className="hover:text-cyan-400 transition-colors">info@metrorail.co.za</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-400 shrink-0" />
              <span>0800 65 64 63</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              <span>Cape Town Station, Adderley St</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Metrorail &mdash; a PRASA division. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer