import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Flare Creative. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
