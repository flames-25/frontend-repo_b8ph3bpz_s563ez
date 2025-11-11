export default function Logos() {
  const logos = [
    'stripe','vercel','shopify','notion','figma','airbnb'
  ]
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-gray-500 text-sm mb-6">Trusted by product-led teams</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 opacity-70">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center">
              <img src={`https://cdn.simpleicons.org/${l}/111827`} alt={l} className="h-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
