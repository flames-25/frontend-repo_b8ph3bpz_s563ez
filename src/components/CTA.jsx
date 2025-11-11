export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="rounded-[22px] bg-white p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Ready to grow? Get a custom plan in 48 hours.</h3>
                <p className="mt-3 text-gray-600">Tell us about your goals. We’ll respond with a clear roadmap, timeline and pricing.</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 list-disc list-inside">
                  <li>Free audit of your current funnel</li>
                  <li>3 strategic bets with expected impact</li>
                  <li>Budget recommendations by channel</li>
                </ul>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input className="col-span-2 md:col-span-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" placeholder="Name" required />
                  <input className="col-span-2 md:col-span-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" placeholder="Company" />
                </div>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" placeholder="Email" type="email" required />
                <textarea className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" placeholder="What are you trying to achieve?" rows="4" />
                <button className="w-full rounded-xl bg-gray-900 text-white py-3 text-sm font-medium hover:bg-black">Get my plan</button>
                <p className="text-xs text-gray-500 text-center">We respect your inbox. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
