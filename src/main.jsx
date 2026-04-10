export default function FleurAndJoieWebsite() {
  const planningTiers = [
    {
      title: "Intimate Celebrations",
      price: "£250",
      detail: "For events under £3,000",
      description:
        "A thoughtful planning service for smaller occasions, with elegant support from concept to coordination.",
    },
    {
      title: "Signature Events",
      price: "£500",
      detail: "For events up to £7,000",
      description:
        "Ideal for milestone birthdays and beautifully styled gatherings that need a more involved planning hand.",
    },
    {
      title: "Bespoke Planning",
      price: "From £1,000",
      detail: "For events over £7,000",
      description:
        "A premium service for larger celebrations, elevated guest experiences, and high-touch event coordination.",
    },
  ];

  const hireItems = [
    {
      title: "Aesthetic Bouncy Castle",
      half: "£175",
      full: "£250",
      note: "A statement piece for beautifully styled celebrations.",
    },
    {
      title: "Soft Play & Wobble Cars",
      half: "£65",
      full: "£100",
      note: "Indoor play package designed for little guests.",
    },
    {
      title: "Wooden Garden Games",
      half: "—",
      full: "£200",
      note: "Classic outdoor entertainment with a premium finish.",
    },
  ];

  const packages = [
    {
      name: "Little Luxe",
      description:
        "A refined children's setup featuring soft play and wobble cars, perfect for indoor celebrations.",
    },
    {
      name: "Garden Party Edit",
      description:
        "A curated outdoor experience with our aesthetic castle and handcrafted wooden games.",
    },
    {
      name: "Celebration Planning",
      description:
        "From stylish birthdays to larger private occasions, we plan events with care, calm, and beautiful detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-stone-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <header className="flex items-center justify-between py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Fleur & Joie</p>
              <p className="mt-1 text-sm text-stone-500">Curated celebrations, beautifully styled</p>
            </div>
            <nav className="hidden gap-6 text-sm md:flex">
              <a href="#about" className="hover:text-stone-950">About</a>
              <a href="#services" className="hover:text-stone-950">Services</a>
              <a href="#pricing" className="hover:text-stone-950">Pricing</a>
              <a href="#contact" className="hover:text-stone-950">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">Premium Event Planning & Hire</p>
              <h1 className="max-w-xl text-5xl font-light leading-tight text-stone-900 md:text-6xl">
                Elegant events for children, adults, and every meaningful moment in between.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
                Fleur & Joie creates refined celebrations through thoughtful event planning and beautifully curated hire pieces,
                from intimate children's parties to elevated milestone occasions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
                >
                  Enquire Now
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-500 hover:text-stone-900"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <div className="h-64 rounded-[1.5rem] bg-stone-200" />
                <p className="mt-4 text-sm text-stone-500">Hero image placeholder for a premium styled event setup</p>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-stone-200">
                  <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Signature Feel</p>
                  <p className="mt-3 text-lg leading-8 text-stone-700">
                    Soft neutrals, elevated details, and a calm, premium experience from first enquiry to event day.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-stone-200">
                  <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Built to Grow</p>
                  <p className="mt-3 text-lg leading-8 text-stone-700">
                    Positioned for children's celebrations now, with a brand strong enough for luxury birthdays and larger private events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">About</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900 md:text-4xl">A brand inspired by beauty, joy, and meaningful celebration.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-stone-600">
              Fleur & Joie is a premium event planning and hire business created to bring elegance and ease to special occasions.
              Inspired by your daughters, the brand carries a personal story while remaining timeless, versatile, and suited to both
              children's celebrations and sophisticated milestone events.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Services</p>
          <h2 className="mt-4 text-3xl font-light text-stone-900 md:text-4xl">Planning, styling, and hire for beautifully curated occasions.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className="rounded-[2rem] bg-stone-50 p-8 shadow-sm ring-1 ring-stone-200">
                <h3 className="text-2xl font-light text-stone-900">{pkg.name}</h3>
                <p className="mt-4 leading-8 text-stone-600">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Event Planning</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900">Planning packages</h2>
            <div className="mt-8 space-y-6">
              {planningTiers.map((tier) => (
                <div key={tier.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-2xl font-light text-stone-900">{tier.title}</h3>
                    <p className="text-xl text-stone-700">{tier.price}</p>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-500">{tier.detail}</p>
                  <p className="mt-4 leading-8 text-stone-600">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Hire Collection</p>
            <h2 className="mt-4 text-3xl font-light text-stone-900">Hire pricing</h2>
            <div className="mt-8 space-y-6">
              {hireItems.map((item) => (
                <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                  <h3 className="text-2xl font-light text-stone-900">{item.title}</h3>
                  <p className="mt-4 leading-8 text-stone-600">{item.note}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <p className="uppercase tracking-[0.2em] text-stone-500">Half Day</p>
                      <p className="mt-2 text-xl text-stone-800">{item.half}</p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <p className="uppercase tracking-[0.2em] text-stone-500">Full Day</p>
                      <p className="mt-2 text-xl text-stone-800">{item.full}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-stone-200">
                <div className="h-72 rounded-[1.5rem] bg-stone-200" />
                <p className="mt-4 text-sm text-stone-500">Gallery image placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2.5rem] bg-white p-10 text-center shadow-sm ring-1 ring-stone-200 md:p-14">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Contact</p>
          <h2 className="mt-4 text-3xl font-light text-stone-900 md:text-4xl">Planning a celebration?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Whether you're planning a children's party, a milestone birthday, or a bespoke private event, we'd love to hear more.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@fleurandjoie.com" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
              hello@fleurandjoie.com
            </a>
            <a href="https://instagram.com" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-500 hover:text-stone-900">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
