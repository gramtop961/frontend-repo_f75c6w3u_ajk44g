import Spline from '@splinetool/react-spline';
import { Star, Droplet } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-zinc-950 dark:via-zinc-950/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-200/70 dark:ring-zinc-800/70">
            <Droplet className="h-3.5 w-3.5 text-blue-600" />
            Ice-cold refreshment, 24/7
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Modern vending machines for a always-on world
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
            From smart beverage vendors to combo snack stations — we design, deploy, and maintain vending solutions
            that delight customers and boost your revenue.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700"
            >
              Get a quote
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Explore products
            </a>
            <div className="ml-2 inline-flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300">
              <Star className="h-4 w-4 text-yellow-500" />
              Trusted by venues, offices, and campuses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
