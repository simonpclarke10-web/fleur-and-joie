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
      half: "-",
      full: "£200",
      note: "Classic outdoor entertainment with a premium finish.",
    },
  ];

  return (
    <div className="site">
      <header className="hero">
        <div className="container">
          <nav className="topbar">
            <div>
              <div className="brand">Fleur & Joie</div>
              <div className="tagline">Curated celebrations, beautifully styled</div>
            </div>
            <div className="navlinks">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <div>
              <p className="eyebrow">Premium Event Planning & Hire</p>
              <h1>
                Elegant events for children, adults, and every meaningful moment
                in between.
              </h1>
              <p className="intro">
                Fleur & Joie creates refined celebrations through thoughtful
                event planning and beautifully curated hire pieces, from intimate
                children's parties to elevated milestone occasions.
              </p>
              <div className="buttons">
                <a className="btn btn-dark" href="#contact">
                  Enquire Now
                </a>
                <a className="btn btn-light" href="#services">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="placeholder">Hero image placeholder</div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">About</p>
            <h2>A brand inspired by beauty, joy, and meaningful celebration.</h2>
          </div>
          <div>
            <p>
              Fleur & Joie is a premium event planning and hire business created
              to bring elegance and ease to special occasions. Inspired by your
              daughters, the brand carries a personal story while remaining
              timeless, versatile, and suited to both children's celebrations and
              sophisticated milestone events.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>Planning, styling, and hire for beautifully curated occasions.</h2>

          <div className="grid three">
            <div className="card">
              <h3>Little Luxe</h3>
              <p>
                A refined children's setup featuring soft play and wobble cars,
                perfect for indoor celebrations.
              </p>
            </div>
            <div className="card">
              <h3>Garden Party Edit</h3>
              <p>
                A curated outdoor experience with our aesthetic castle and
                handcrafted wooden games.
              </p>
            </div>
            <div className="card">
              <h3>Celebration Planning</h3>
              <p>
                From stylish birthdays to larger private occasions, we plan
                events with care, calm, and beautiful detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container grid two">
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

      <section className="section alt">
        <div className="container">
          <div className="grid three">
            <div className="gallery">Gallery image</div>
            <div className="gallery">Gallery image</div>
            <div className="gallery">Gallery image</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-box">
          <p className="eyebrow">Contact</p>
          <h2>Planning a celebration?</h2>
          <p className="intro center">
            Whether you're planning a children's party, a milestone birthday, or
            a bespoke private event, we'd love to hear more.
          </p>
          <div className="buttons center-buttons">
            <a className="btn btn-dark" href="mailto:simonpclarke10@gmail.com">
              simonpclarke10@gmail.com
            </a>
            <a className="btn btn-light" href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;