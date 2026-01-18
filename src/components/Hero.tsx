export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="200">
            <div className="hero-content">
              <h1 className="hero-title">Hey, I'm Jote Tolesa</h1>
              <p className="hero-description">
                Freelance graphics designer &amp; web developer based in Addis Ababa. I design,
                code, and maintain landing pages, one-pagers, and multi-page sites with custom
                graphics and content.
              </p>
              <div className="hero-actions">
                <a href="#works" className="btn-primary">View My Work</a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">3+ yrs</span>
                  <span className="stat-label">Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Active Clients</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="300">
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img 
                  src="/assets/img/portfolio/solar-first.webp"
                  className="img-fluid hero-image" 
                  alt="Hello Solar project preview"
                />
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <i className="bi bi-palette"></i>
                    <span>Design</span>
                  </div>
                  <div className="floating-card card-2">
                    <i className="bi bi-code-slash"></i>
                    <span>Development</span>
                  </div>
                  <div className="floating-card card-3">
                    <i className="bi bi-brightness-high"></i>
                    <span>Branding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

