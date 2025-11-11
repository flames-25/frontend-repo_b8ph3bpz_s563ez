import { motion } from 'framer-motion'

const work = [
  {
    title: 'NeoBank Launch',
    tag: 'Fintech',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Playful 3D Web',
    tag: 'Interactive',
    img: 'https://images.unsplash.com/photo-1496302662116-85c1f71d30d7?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Global Rebrand',
    tag: 'Brand',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
            <p className="mt-2 text-gray-600">A snapshot of launches and systems we loved building.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-50">Start a project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {work.map((card, i) => (
            <motion.a
              key={card.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white"
            >
              <img src={card.img} alt={card.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  {card.tag}
                </div>
                <h3 className="mt-2 font-semibold">{card.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
