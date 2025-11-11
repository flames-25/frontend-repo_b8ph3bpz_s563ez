import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-white/50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white shadow-lg shadow-indigo-500/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">Flare Creative</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-black transition-colors">
            Get a proposal
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-gray-200 bg-white">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-gray-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium">
              Get a proposal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
