import { ShoppingCart, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">VM</span>
            <span className="text-lg">VendoMax</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition">Products</a>
            <a href="#solutions" className="hover:text-zinc-900 dark:hover:text-white transition">Solutions</a>
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Phone className="h-4 w-4" /> Contact
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <ShoppingCart className="h-4 w-4" /> Get Machines
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
