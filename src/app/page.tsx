import Link from 'next/link'

const painPoints = [
  { icon: '📋', title: 'The Spreadsheet Sergeant', desc: 'Your admin sergeant spends 8-15 hours/month building schedules in Excel. When someone calls out at 4 AM, they\'re making calls from a paper list.' },
  { icon: '💰', title: 'The Overtime Black Hole', desc: 'No real-time visibility into who\'s accumulating hours. By the time payroll runs, you\'ve blown your OT budget by 20-40%.' },
  { icon: '⚖️', title: 'The FLSA Time Bomb', desc: 'Spreadsheets miscalculate 7(k) overtime. A single FLSA collective action lawsuit costs $500K-$2M. Are you sure you\'re compliant?' },
  { icon: '🏛️', title: 'Court Appearance Collisions', desc: 'Officers work a 10-hour shift then appear in court for 4 hours — generating overtime that could\'ve been avoided with visibility.' },
]

const features = [
  { icon: '📅', title: 'Visual Shift Calendar', desc: 'Color-coded daily, weekly, and monthly views. See who\'s on duty at a glance.' },
  { icon: '⏱️', title: 'FLSA 7(k) Overtime Tracking', desc: 'Real-time hours against the 171-hour threshold. Warnings at 80%, 90%, 100%.' },
  { icon: '🔄', title: 'Shift Swap Management', desc: 'Officers request swaps, supervisors approve with one click. Full audit trail.' },
  { icon: '⚖️', title: 'Court Calendar Integration', desc: 'Track subpoenas, flag OT conflicts, overlay court dates on the schedule.' },
  { icon: '👮', title: 'Officer Roster', desc: 'Badge #, rank, seniority, certifications, contact info — all in one place.' },
  { icon: '📊', title: 'Cost Intelligence', desc: 'Know your OT spend in real-time. Prevent overtime before it happens.' },
]

const pricing = [
  { tier: 'Starter', price: 99, officers: 'Up to 25 officers', features: ['Full shift scheduling', 'Overtime tracking', 'Shift swap management', 'Basic reporting', 'Email support'], cta: 'Start Free Pilot' },
  { tier: 'Professional', price: 199, officers: 'Up to 75 officers', features: ['Everything in Starter', 'Court calendar integration', 'Payroll export', 'Advanced analytics', 'Phone support', 'API access'], cta: 'Start Free Pilot', popular: true },
  { tier: 'Department', price: 349, officers: 'Up to 150 officers', features: ['Everything in Professional', 'Auto-scheduling engine', 'Custom integrations', 'Dedicated onboarding', 'Priority SLA', 'CJIS compliance support'], cta: 'Contact Us' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-badge-blue rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.58-3.77-1.22-7-5.75-7-10.58V6.3l7-3.12z"/>
                <path d="M10 12l-2-2-1.41 1.41L10 14.83l6-6L14.59 7.41z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">ShiftGuard</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition">Pricing</a>
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition">Log In</Link>
            <Link href="/request-pilot" className="bg-badge-blue hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
              Request Pilot
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-navy-900 pt-20 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-badge-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-navy-700 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Built by a cop, for cops
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Stop Scheduling with<br />
            <span className="text-badge-blue">Spreadsheets</span> and <span className="text-gold">Prayer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            ShiftGuard is modern scheduling and FLSA 7(k) overtime tracking built specifically for law enforcement. 
            Real-time visibility. Zero compliance surprises. Priced for your budget.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/request-pilot" className="bg-badge-blue hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-blue-900/30">
              Start Your 60-Day Free Pilot →
            </Link>
            <Link href="/dashboard" className="bg-navy-700 hover:bg-navy-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition border border-navy-600">
              See Demo
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card required. Full features for 60 days.</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Sound Familiar?</h2>
            <p className="text-gray-500 text-lg">These problems cost your department time, money, and legal exposure every month.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Everything Your Department Needs</h2>
            <p className="text-gray-500 text-lg">Purpose-built for law enforcement. Not another generic scheduling tool.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold text-2xl">★</span>
            ))}
          </div>
          <blockquote className="text-xl text-gray-200 italic leading-relaxed mb-6">
            &ldquo;I spent 12 years building schedules in Excel. ShiftGuard did in 20 minutes what used to take me an entire Saturday. 
            The overtime tracking alone is worth twice the price.&rdquo;
          </blockquote>
          <p className="text-gold font-semibold">— Sgt. Demo User, Example Police Department</p>
          <p className="text-gray-400 text-sm mt-1">Pilot program participant</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Transparent Pricing</h2>
            <p className="text-gray-500 text-lg">No &ldquo;request a demo&rdquo; gatekeeping. Pick a plan that fits your department.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((p) => (
              <div key={p.tier} className={`rounded-2xl p-8 ${p.popular ? 'bg-navy-900 text-white ring-2 ring-badge-blue scale-105' : 'bg-white border border-gray-200'}`}>
                {p.popular && <div className="text-badge-blue text-xs font-bold uppercase tracking-widest mb-4">Most Popular</div>}
                <h3 className={`text-xl font-bold mb-1 ${p.popular ? 'text-white' : 'text-navy-900'}`}>{p.tier}</h3>
                <p className={`text-sm mb-4 ${p.popular ? 'text-gray-400' : 'text-gray-500'}`}>{p.officers}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${p.popular ? 'text-white' : 'text-navy-900'}`}>${p.price}</span>
                  <span className={`text-sm ${p.popular ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${p.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-badge-blue mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-pilot"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition ${
                    p.popular
                      ? 'bg-badge-blue hover:bg-blue-700 text-white'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">All plans include a 60-day free pilot. 15% discount on annual billing.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Modernize Your Department?</h2>
          <p className="text-xl text-gray-300 mb-8">Join the pilot program. 60 days free, full features, real support.</p>
          <Link href="/request-pilot" className="inline-block bg-gold hover:bg-gold-light text-navy-900 font-bold px-10 py-4 rounded-lg text-lg transition">
            Request Your Free Pilot →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-navy-700 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-badge-blue" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.58-3.77-1.22-7-5.75-7-10.58V6.3l7-3.12z"/>
            </svg>
            <span className="text-white font-bold">ShiftGuard</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 ShiftGuard. Built by law enforcement, for law enforcement.</p>
        </div>
      </footer>
    </div>
  )
}
