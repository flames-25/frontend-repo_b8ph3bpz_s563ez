import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Digital creative marketing that converts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl"
          >
            We blend strategy, storytelling and playful tech to craft campaigns that drive growth. From brand to performance, we ship work people remember.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors">
              Get a free growth plan
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
              See our work
            </a>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-xs text-gray-500">
            <div className="flex -space-x-2">
              {[0,1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+5}`} alt="client" className="h-8 w-8 rounded-full ring-2 ring-white" />
              ))}
            </div>
            <span>Trusted by 150+ startups and global brands</span>
          </div>
        </div>
        <div className="h-[60vh] lg:h-[80vh]" />
      </div>
    </section>
  )
}
