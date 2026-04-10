import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // PACKAGES (your main offer)
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

  // PLANNING (add-on + premium service)
  const planningTiers = [
    {
      title: "Planning & Setup Add-On",
      price: "From £250",
      detail: "Available with pre-made packages",
      description:
        "Add planning and event-day setup to any package for a more stress-free experience.",
    },
    {
      title: "Signature Event Planning",
      price: "From £500",
      detail: "For events up to £7,000",
      description:
        "Ideal for milestone birthdays and styled celebrations requiring additional planning support.",
    },
    {
      title: "Bespoke Planning",
      price: "From £1,000",
      detail: "For larger events",
      description:
        "A premium service for larger celebrations and high-touch event coordination.",
    },
  ];

  // HIRE ITEMS
  const hireItems = [
    {
      title: "Aesthetic Bouncy Castle",
      half: "£175",
      full: "£250",
    },
    {
      title: "Soft Play & Toys Experience",
      half: "£65",
      full: "£100",
    },
    {
      title: "Luxury Garden Games",
      half: "—",
      full: "£200",
    },
    {
      title: "Speakers",
      half: "—",
      full: "£150",
    },
  ];

  const faqs = [
    {
      question: "How do I book?",
      answer:
        "Get in touch with your event date, location, and requirements and we’ll confirm availability.",
    },
    {
      question: "Where are you based?",
      answer:
        "We are based in Winsford and cover Cheshire and surrounding areas.",
    },
    {
      question: "Do you do adult events?",
      answer:
        "Yes — we offer both children's and adult celebrations including milestone events.",
    },
  ];

  return (
    <div className="site">

      {/* HEADER */}
      <header className="hero">
        <div className="container">

          <div className="logo-wrap">
            <div className="logo-main">Fleur & Joie</div>
            <div className="logo-sub">Curated celebrations, beautifully styled</div>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Premium Event Styling & Hire</p>

              <h1>
                Elegant event styling for beautifully curated celebrations
              </h1>

              <p className="refined-text">
                From children's parties to milestone birthdays, Fleur & Joie creates refined,
                stress-free events across Cheshire.
              </p>

              <div className="buttons">
                <a href="#contact" className="btn btn-dark">Enquire Now</a>
                <a href="#packages" className="btn btn-light">View Packages</a>
              </div>

              <div className="hero-single-box">
                Children's & Adult Events • Covering Cheshire & Surrounding Areas
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* PACKAGES */}
      <section id="packages" className="section alt">
        <div className="container">
          <p className="eyebrow">Pre-Made Packages</p>
          <h2>Styled packages designed for effortless celebrations</h2>

          <div className="grid two">
            {packages.map((pkg) => (
              <div className="card" key={pkg.name}>
                <h3>{pkg.name}</h3>
                <p className="package-price">{pkg.price}</p>
                <p>{pkg.description}</p>
                <p className="package-note">
                  Add planning and setup from £250 for a stress-free experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Planning Services</p>
          <h2>Additional support for curated and bespoke events</h2>

          <div className="grid three">
            {planningTiers.map((tier) => (
              <div className="card" key={tier.title}>
                <h3>{tier.title}</h3>
                <p className="package-price">{tier.price}</p>
                <p>{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRE */}
      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Individual Hire</p>
          <h2>Hire items available separately</h2>

          <div className="grid two">
            {hireItems.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>Half Day: {item.half}</p>
                <p>Full Day: {item.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">FAQs</p>
          <h2>Everything you need to know</h2>

          {faqs.map((faq) => (
            <div key={faq.question} className="card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section alt">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h2>Planning a celebration?</h2>

          <a href="mailto:fleurandjoie@gmail.com" className="btn btn-dark">
            fleurandjoie@gmail.com
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;