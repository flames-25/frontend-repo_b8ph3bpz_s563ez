import { Workflow, PenTool, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: PenTool,
    title: 'Discover',
    desc: 'Deep dive into audience, product and goals to define the opportunity.'
  },
  {
    icon: Workflow,
    title: 'Design',
    desc: 'Concepts, creative directions and systems designed to scale.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Ship across channels with measurement baked in from day one.'
  },
  {
    icon: BarChart3,
    title: 'Optimize',
    desc: 'Turn insights into experiments. Iterate weekly to compound growth.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">How we work</h2>
          <p className="mt-4 text-gray-600">A transparent, collaborative model that keeps business outcomes front and center.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">{i + 1}. {title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
