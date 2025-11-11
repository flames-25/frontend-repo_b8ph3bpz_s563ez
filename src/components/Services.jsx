import { Rocket, BadgeCheck, Megaphone, LineChart, Palette, Camera } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Go-to-market & Growth',
    desc: 'Positioning, funnels, landing pages, lifecycle and paid to scale what works.',
  },
  {
    icon: Megaphone,
    title: 'Campaigns that pop',
    desc: 'Concept, creative, and production for launch moments worth sharing.',
  },
  {
    icon: LineChart,
    title: 'Performance & CRO',
    desc: 'Analytics, experimentation, and conversion design to turn clicks into customers.',
  },
  {
    icon: Palette,
    title: 'Brand & Identity',
    desc: 'Visual systems, guidelines and tone that make you unmistakable.',
  },
  {
    icon: Camera,
    title: 'Content & Social',
    desc: 'Short-form, UGC, and content engines that build community and demand.',
  },
  {
    icon: BadgeCheck,
    title: 'Web & Interactive',
    desc: 'High-performance websites and playful 3D that tell your story.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Full-funnel creative marketing</h2>
          <p className="mt-4 text-gray-600">Strategy, creative and performance working as one team to move the needle.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
