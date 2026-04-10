import "./App.css";

function App() {
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
      note: "A statement hire piece for beautifully styled celebrations.",
    },
    {
      title: "Soft Play Experience",
      half: "£65",
      full: "£100",
      note: "An indoor play package designed for little guests.",
    },
    {
      title: "Luxury Garden Games",
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

  const highlights = [
    {
      title: "Premium Styling",
      description:
        "Every setup is designed with a clean, elegant look that feels thoughtful, polished, and memorable.",
    },
    {
      title: "Reliable & Stress-Free",
      description:
        "We aim to make celebrations feel easy with clear communication, dependable service, and careful setup.",
    },
    {
      title: "For Every Occasion",
      description:
        "From children's parties to milestone birthdays and private celebrations, our brand is designed to grow with every event.",
    },
  ];

  return (
    <div className="site">
      <header className="hero">
        <div className="container">
          <nav className="topbar">
            <div>
              <div className="brand">Fleur &amp; Joie</div>
              <div className="tagline">
                Curated celebrations, beautifully styled
              </div>
            </div>

            <div className="navlinks">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Premium Event Styling &amp; Hire</p>
              <h1>
                Elegant event styling and hire for beautifully curated
                celebrations.
              </h1>
              <p className="intro">
                From children's parties to milestone birthdays, Fleur &amp; Joie
                creates refined, stress-free events with a premium finish across
                Winsford, Cheshire, and surrounding areas.
              </p>

              <div className="buttons">
                <a className="btn btn-dark" href="#contact">
                  Enquire Now
                </a>
                <a className="btn btn-light" href="#services">
                  Explore Services
                </a>
              </div>

              <div className="hero-meta">
                <span>Based in Winsford</span>
                <span>Covering Cheshire</span>
                <span>Children's &amp; Adult Events</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-card large-card">
                <div className="image-placeholder">Your best hero photo here</div>
              </div>

              <div className="mini-cards">
                <div className="info-card">
                  <h3>Thoughtful Details</h3>
                  <p>
                    Beautifully styled setups that feel calm, elevated, and
                    special.
                  </p>
                </div>

                <div className="info-card">
                  <h3>Designed to Grow</h3>
                  <p>
                    A premium brand for children's celebrations, milestone
                    birthdays, and private events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container two-col about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2>A brand inspired by beauty, joy, and meaningful celebration.</h2>
          </div>

          <div>
            <p>
              Fleur &amp; Joie is a premium event planning and hire business
              created to bring elegance and ease to special occasions. Inspired
              by family and rooted in thoughtful detail, the brand is designed
              to feel timeless, versatile, and suited to both children's
              celebrations and sophisticated milestone events.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>Planning, styling, and hire for beautifully curated occasions.</h2>

          <div className="grid three">
            {packages.map((pkg) => (
              <div className="card service-card" key={pkg.name}>
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Thoughtful details. Reliable service. Beautiful results.</h2>

          <div className="grid three">
            {highlights.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section alt">
        <div className="container pricing-layout">
          <div>
            <p className="eyebrow">Event Planning</p>
            <h2>Planning packages</h2>

            <div className="stack">
              {planningTiers.map((tier) => (
                <div className="card" key={tier.title}>
                  <div className="row">
                    <h3>{tier.title}</h3>
                    <strong>{tier.price}</strong>
                  </div>
                  <p className="small">{tier.detail}</p>
                  <p>{tier.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Hire Collection</p>
            <h2>Hire pricing</h2>

            <div className="stack">
              {hireItems.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>

                  <div className="grid two prices">
                    <div className="price-box">
                      <span>Half Day</span>
                      <strong>{item.half}</strong>
                    </div>
                    <div className="price-box">
                      <span>Full Day</span>
                      <strong>{item.full}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2>A glimpse into the Fleur &amp; Joie aesthetic.</h2>
          <p className="section-intro">
            Replace these placeholders with your best setup photos as soon as
            you have them. Real imagery will make the biggest difference to how
            premium the site feels.
          </p>

          <div className="gallery-grid">
            <div className="gallery large-gallery">Hero setup photo</div>
            <div className="gallery">Soft play setup</div>
            <div className="gallery">Castle or garden games</div>
            <div className="gallery">Styled detail photo</div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container location-box">
          <p className="eyebrow">Areas We Cover</p>
          <h2>Based in Winsford, covering Cheshire and surrounding areas.</h2>
          <p className="center-text">
            Fleur &amp; Joie is based in Winsford and covers Cheshire for event
            styling, planning, and hire. Travel outside this area may be
            available on request.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-box">
          <p className="eyebrow">Contact</p>
          <h2>Planning a celebration?</h2>
          <p className="intro center">
            Tell us your event date, location, and what you're looking for, and
            we'll be in touch with availability and pricing.
          </p>

          <div className="contact-actions">
            <a className="btn btn-dark" href="mailto:fleurandjoie@gmail.com">
              fleurandjoie@gmail.com
            </a>
            <a
              className="btn btn-light"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand footer-brand">Fleur &amp; Joie</div>
            <p className="footer-text">
              Premium event styling, planning, and hire in Winsford and across
              Cheshire.
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;