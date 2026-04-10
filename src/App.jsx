import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

const packages = [
  {
    name: "Little Luxe",
    price: "£200 Half Day · £300 Full Day",
    description:
      "A beautifully styled children's package including a bouncy castle, soft play, and ride-on toys.",
  },
  {
    name: "Garden Vibes",
    price: "£550 Full Day",
    description:
      "A premium outdoor package including a bouncy castle, garden games, and speakers for the perfect garden celebration.",
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
      title: "Soft Play & Toys Experience",
      half: "£65",
      full: "£100",
      note: "An indoor play package designed for little guests, with soft play and toys for stylish children's celebrations.",
    },
    {
      title: "Luxury Garden Games",
      half: "—",
      full: "£200",
      note: "Classic outdoor entertainment with a premium finish.",
    },
    {
      title: "Speakers",
      half: "—",
      full: "£150",
      note: "A simple speaker hire option to elevate garden parties and private celebrations.",
    },
  ];

  const packages = [
    {
      name: "Little Luxe",
      price: "£200 Half Day · £300 Full Day",
      description:
        "A beautifully styled children's package including a bouncy castle, soft play, and ride-on toys.",
    },
    {
      name: "Garden Vibes",
      price: "£550 Full Day",
      description:
        "A premium outdoor package including a bouncy castle, garden games, and speakers for the perfect garden celebration.",
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
        "From children's parties to milestone birthdays and private celebrations, Fleur & Joie is designed to grow with every event.",
    },
  ];

  const faqs = [
    {
      question: "How do I book?",
      answer:
        "Get in touch by email or Instagram with your date, location, and what you're looking for, and we'll confirm availability and pricing.",
    },
    {
      question: "Do you cover all of Cheshire?",
      answer:
        "Yes, we are based in Winsford and cover Cheshire and surrounding areas. Travel outside this area may also be available on request.",
    },
    {
      question: "Do you offer both children's and adult events?",
      answer:
        "Yes — Fleur & Joie is designed to deliver beautifully styled children's parties as well as refined adult celebrations and milestone events.",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="hero">
        <div className="container">
          <div className="logo-wrap">
            <div className="logo-main">Fleur &amp; Joie</div>
            <div className="logo-sub">Curated celebrations, beautifully styled</div>
          </div>

          <nav className="topbar">
            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`navlinks ${menuOpen ? "nav-open" : ""}`}>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#packages" onClick={closeMenu}>Packages</a>
              <a href="#pricing" onClick={closeMenu}>Pricing</a>
              <a href="#gallery" onClick={closeMenu}>Gallery</a>
              <a href="#faq" onClick={closeMenu}>FAQs</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Premium Event Styling &amp; Hire</p>
              <h1>
                Elegant event styling and hire for beautifully curated
                celebrations.
              </h1>
              <p className="intro refined-text">
                From children's parties to milestone birthdays, Fleur &amp; Joie
                creates refined, stress-free events with a premium finish across
                Winsford, Cheshire, and surrounding areas.
              </p>

              <div className="buttons">
                <a className="btn btn-dark" href="#contact">
                  Enquire Now
                </a>
                <a className="btn btn-light" href="#packages">
                  Explore Packages
                </a>
              </div>

              <div className="hero-single-box">
                Children's &amp; Adult Events • Covering Cheshire &amp;
                Surrounding Areas
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-card large-card photo hero-photo">
                <div className="image-overlay">
                  <span>Luxury celebration concept</span>
                </div>
              </div>

              <div className="mini-cards one-card">
                <div className="photo small-photo softplay-photo">
                  <div className="image-overlay small-overlay">
                    <span>Play styling concept</span>
                  </div>
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

      <section id="packages" className="section alt">
        <div className="container">
          <p className="eyebrow">Pre-Made Packages</p>
          <h2>Thoughtfully curated packages for stylish, stress-free celebrations.</h2>

          <div className="grid two package-grid">
            {packages.map((pkg) => (
              <div className="card service-card" key={pkg.name}>
                <h3>{pkg.name}</h3>
                <p className="package-price">{pkg.price}</p>
                <p>{pkg.description}</p>
                <p className="package-note">
                  Add planning and event-day setup from £250 for a more stress-free experience.
                </p>
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
            <p className="eyebrow">Planning Services</p>
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
            <p className="eyebrow">Individual Hire Options</p>
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
            These are temporary editorial-style concept visuals to help the
            brand feel polished while you prepare for launch.
          </p>

          <div className="gallery-grid">
            <div className="gallery large-gallery g1">
              <div className="image-overlay">
                <span>Signature party concept</span>
              </div>
            </div>
            <div className="gallery g2">
              <div className="image-overlay">
                <span>Soft play styling</span>
              </div>
            </div>
            <div className="gallery g3">
              <div className="image-overlay">
                <span>Garden party styling</span>
              </div>
            </div>
            <div className="gallery g4">
              <div className="image-overlay">
                <span>Adult tablescape concept</span>
              </div>
            </div>
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

      <section id="faq" className="section">
        <div className="container">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Everything you need to know before enquiring.</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container contact-box">
          <p className="eyebrow">Contact</p>
          <h2>Planning a celebration?</h2>
          <p className="intro center">
            Tell us your event date, location, and what you're looking for, and
            we'll be in touch with availability and pricing.
          </p>

          <form
            className="enquiry-form"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div className="form-grid">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <input type="text" name="eventType" placeholder="Event type" />
              <input type="text" name="eventDate" placeholder="Event date" />
              <input type="text" name="location" placeholder="Event location" />
              <input type="text" name="package" placeholder="Service or hire item" />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your celebration"
              rows="6"
              required
            />

            <div className="contact-actions centered-actions">
              <button className="btn btn-dark" type="submit">
                Send Enquiry
              </button>
              <a className="btn btn-light" href="mailto:fleurandjoie@gmail.com">
                fleurandjoie@gmail.com
              </a>
            </div>
          </form>

          <p className="form-note">
            Replace <strong>your-form-id</strong> with your real Formspree form
            ID when you're ready.
          </p>
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
            <a href="#packages">Packages</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;