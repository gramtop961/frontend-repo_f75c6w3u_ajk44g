import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductsShowcase from './components/ProductsShowcase.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <ProductsShowcase />
        <section id="solutions" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Smart telemetry</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">Live sales, stock alerts, and remote price updates keep operations lean.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Cashless-first</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">Tap-to-pay support for Apple Pay, Google Pay, and all major cards.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Nationwide service</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">Install, restock, and maintenance covered by our certified technicians.</p>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} VendoMax — All rights reserved.
      </footer>
    </div>
  );
}
