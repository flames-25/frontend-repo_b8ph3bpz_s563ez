const testimonials = [
  {
    quote: 'They felt like an in-house team. We launched with confidence and hit our targets within 6 weeks.',
    name: 'Amelia Hart',
    role: 'VP Marketing, Orbital',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    quote: 'The only team that truly blends brand and performance. Creative that sells.',
    name: 'Daniel Cho',
    role: 'Founder, Lumen',
    avatar: 'https://i.pravatar.cc/100?img=22'
  },
  {
    quote: 'Our favorite partners for high-stakes launches. Fast, senior, and fun.',
    name: 'Priya Nair',
    role: 'Head of Growth, Alloy',
    avatar: 'https://i.pravatar.cc/100?img=32'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Clients say nice things</h2>
          <p className="mt-3 text-gray-600">Outcomes over output. Relationships that last.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-sm text-gray-700">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
