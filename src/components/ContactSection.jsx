import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Let’s partner up</h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Tell us about your location and goals. Our team will recommend the ideal machines, placements,
              and service plan for your audience.
            </p>

            <div className="mt-8 space-y-4 text-zinc-800 dark:text-zinc-200">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600" /> +1 (555) 012-3456</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> sales@vendomax.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /> 120 Market St, San Francisco, CA</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Thanks! We’ll be in touch.</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">A specialist will reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">First name</label>
                    <input
                      required
                      type="text"
                      className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Alex"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Last name</label>
                    <input
                      required
                      type="text"
                      className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Taylor"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Work email</label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Location details</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Number of visitors, hours of operation, preferred products..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700"
                >
                  Request a quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
