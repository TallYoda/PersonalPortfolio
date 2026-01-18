export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Web Design',
      description: 'Design, code and host sleek, fast and responsive webpages for your business.',
      bullets: [
        'Designed with themes and styles of your selection.',
        'Sites built for all standard devices and aspect ratios.',
        'Professionally written and edited content.',
        'Custom logos, fonts, and animations included.'
      ]
    },
    {
      number: '02',
      title: 'Telegram, Instagram, and Facebook Chatbots',
      description: 'Custom chatbots so your business maintains a steady online presence.',
      bullets: [
        'Respond to basic customer inquiries.',
        'Accept orders and relay them instantly.',
        'Free hosting with back-end code access.'
      ]
    },
    {
      number: '03',
      title: 'Graphic Design',
      description: 'Professionally designed logos, fonts, and graphics for your business.',
      bullets: [
        'Designed with Adobe Illustrator.',
        'Incorporating latest design principles and trends.',
        'Consistent posters, pamphlets and social media posts.'
      ]
    },
    {
      number: '04',
      title: 'SEO & Social Media Management',
      description: 'Plan, manage and execute campaigns for a consistent and engaging online presence.',
      bullets: [
        'Ad campaigns across relevant social media platforms.',
        'SEO services with regular site-ranking reports.',
        'Link building and keyword research.'
      ]
    }
  ]

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Services</span>
        <h2>My Services</h2>
        <p>
          I design, code, and maintain landing pages, one-pager sites, and multi-page dynamic websites
          with custom graphics and content.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="intro-content" data-aos="fade-right" data-aos-delay="100">
              <div className="section-badge mb-3" data-aos="zoom-in" data-aos-delay="50">
                <i className="bi bi-star-fill"></i>
                <span>WHAT I DO</span>
              </div>
              <h2 className="section-heading mb-4">Design, build, and launch modern digital experiences</h2>
              <p className="section-description mb-4">
                Does your business need a fresh digital look? I'm available for website, graphics, and SEO needs.
              </p>
              <a href="#works" className="cta-button" data-aos="fade-right" data-aos-delay="200">
                Explore My Work
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual" data-aos="fade-left" data-aos-delay="150">
              <img src="/assets/img/portfolio/mikiyas4.png" alt="Services" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="services-grid mt-5">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
                <div className="service-card">
                  <div className="card-number">
                    <span>{service.number}</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      {service.title}
                    </h5>
                    <p className="service-description">{service.description}</p>
                    <ul className="mb-0">
                      {service.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
