export default function App() {
  const services = [
    ["Motor Height", "Dial in mounting height for bite, water pressure, RPM, and speed."],
    ["Prop Match", "Test pitch, cup, diameter, and blade style combinations for your real-world load and performance goals."],
    ["Jack Plate Setup", "Setback, lift, and trim range tuned for clean acceleration and control."],
    ["On-Water Testing", "GPS speed, WOT RPM, holeshot, handling, and loaded run checks."],
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden px-6 py-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.35),transparent_35%),linear-gradient(135deg,#020617_0%,#09090b_45%,#18181b_100%)]" />
        <div className="absolute right-[-8rem] top-20 -z-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-48 w-full bg-gradient-to-t from-black to-transparent" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">American NW Outdoors</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">Outboard Setup • Prop Testing • Performance Rigging</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-orange-300 hover:bg-orange-500 hover:text-black sm:block">
            Book Tuning
          </a>
        </nav>

        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 w-fit border-l-4 border-orange-500 bg-white/5 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-zinc-300">
              Built to match your performance goals from holeshot to top speed — or the best balance of both for your boating needs
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              25 Years of Experience Setting Up Boats From High-Performance Rigs to Outboard Jets
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-zinc-300">
              Precision outboard setup and tuning for Western anglers, hunters, river runners, and performance-minded boat owners. We turn guesswork into measured setup: prop, height, trim, load, RPM, and real-world handling.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-none bg-orange-500 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:bg-orange-400">
                Schedule Setup
              </a>
              <a href="#services" className="rounded-none border border-white/20 bg-white/5 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white hover:border-orange-400 hover:text-orange-300">
                See Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/35 to-red-600/10 blur-2xl" />
            <div className="relative border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur">
              <div className="aspect-[4/3] border border-white/10 bg-[linear-gradient(135deg,rgba(249,115,22,0.22),rgba(39,39,42,0.35)),radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-300">Setup Target</p>
                    <h2 className="mt-3 text-4xl font-black uppercase leading-none">Transom to Throttle</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["RPM", "WOT range"],
                      ["GPS", "speed check"],
                      ["PSI", "water pressure"],
                      ["LOAD", "real gear"],
                    ].map(([stat, label]) => (
                      <div key={stat} className="border border-white/10 bg-black/45 p-4">
                        <p className="text-2xl font-black text-orange-400">{stat}</p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-400">
                Fishing boats • Ballistic-style performance rigs • River setups • Lake boats • Hunting loads
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-zinc-950 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Performance Services</p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Tune the whole package</h2>
            </div>
            <p className="max-w-xl text-zinc-400">
              The right setup is not one part. It is the hull, motor, prop, load, water, and driver all working together.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {services.map(([title, text]) => (
              <div key={title} className="group border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-orange-500/60">
                <div className="mb-6 h-1 w-12 bg-orange-500 transition group-hover:w-20" />
                <h3 className="text-xl font-black uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">No Guesswork</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight">Measured setup for real Western waters and conditions.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Baseline", "Current prop, height, load, RPM, trim, and handling notes."],
              ["02", "Adjust", "Make targeted setup changes instead of random swaps."],
              ["03", "Verify", "Run it loaded, measure results, and lock in the best setup."],
            ].map(([num, title, text]) => (
              <div key={num} className="border-l-2 border-orange-500 bg-white/[0.03] p-6">
                <p className="text-sm font-black text-orange-400">{num}</p>
                <h3 className="mt-4 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950 px-6 py-16">
        <div className="mx-auto max-w-5xl border border-orange-500/20 bg-black p-8 shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">
            Tuning Agreement & Disclaimer
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase">
            Customer Authorization
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-zinc-300 sm:text-base">
            <p>
              By requesting tuning, ECU modification, setup changes, or performance-related services from American NW Outdoors, the customer confirms they are the legal owner of the motor, ECU, and related equipment being serviced or have full authorization from the owner to approve modifications.
            </p>

            <p>
              The customer understands that performance tuning, ECU flashing, limiter changes, fuel or timing adjustments, and other modifications may void manufacturer warranties and may affect emissions compliance, reliability, durability, or factory protections.
            </p>

            <p>
              The customer voluntarily authorizes American NW Outdoors to perform requested tuning and setup services with full understanding of the potential risks associated with modified marine engines and performance operation.
            </p>

            <p>
              American NW Outdoors is an independent business and is not affiliated with, sponsored by, endorsed by, or authorized by any outboard manufacturer including but not limited to Mercury, Yamaha, Suzuki, Honda, Tohatsu, or Evinrude.
            </p>

            <p>
              The customer accepts all responsibility for the operation, maintenance, and use of the tuned equipment after service is completed. American NW Outdoors shall not be responsible for incidental, consequential, or indirect damages resulting from misuse, racing, improper setup, mechanical failure, abuse, or operation outside manufacturer specifications.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Customer Name</p>
              <div className="mt-3 h-12 border-b border-white/20" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Date</p>
              <div className="mt-3 h-12 border-b border-white/20" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Signature</p>
              <div className="mt-3 h-12 border-b border-white/20" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Motor / ECU Information</p>
              <div className="mt-3 h-12 border-b border-white/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black px-6 py-16">
        <div className="mx-auto max-w-5xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Contact</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-5xl">Ready to get your setup right?</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Add your phone number, email, Facebook, and Instagram links here. This section is ready for your final contact details.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://americannwoutdoors.com" className="border border-orange-500 bg-orange-500 px-6 py-3 text-center font-black uppercase tracking-widest text-black hover:bg-orange-400">
              americannwoutdoors.com
            </a>
            <a href="#" className="border border-white/20 px-6 py-3 text-center font-black uppercase tracking-widest text-white hover:border-orange-400 hover:text-orange-300">
              Facebook
            </a>
            <a href="#" className="border border-white/20 px-6 py-3 text-center font-black uppercase tracking-widest text-white hover:border-orange-400 hover:text-orange-300">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
