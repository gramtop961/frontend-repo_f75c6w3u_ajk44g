import { Droplet, Star } from 'lucide-react';

const products = [
  {
    name: 'AquaChill 300',
    tag: 'Beverage • Compact',
    desc: 'Slim beverage vendor with smart temperature control and telemetry.',
    color: 'from-sky-400 to-blue-600',
    badge: 'Best value',
  },
  {
    name: 'FrostFlow X',
    tag: 'Beverage • High capacity',
    desc: 'High-volume machine with dynamic pricing and cashless payments.',
    color: 'from-cyan-400 to-emerald-500',
    badge: 'Most popular',
  },
  {
    name: 'Snack+Sip Duo',
    tag: 'Combo • Snacks & Drinks',
    desc: 'Two-in-one snack and drink vendor with modular shelves.',
    color: 'from-indigo-400 to-violet-600',
    badge: 'New',
  },
];

export default function ProductsShowcase() {
  return (
    <section id="products" className="relative py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Flagship machines</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Built for reliability, designed to wow.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Request catalog
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br p-6 shadow-sm hover:shadow-md transition-shadow "
            >
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-2xl`} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-200/70 dark:ring-zinc-800/70">
                  <Droplet className="h-3.5 w-3.5 text-blue-600" /> {p.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.desc}</p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <Star className="h-4 w-4 text-yellow-500" /> {p.badge}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-2 text-sm font-semibold hover:opacity-90"
                  >
                    Get pricing
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
