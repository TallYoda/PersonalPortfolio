export default function Clients() {
  const clients = [
    { name: 'Belcash', logo: '/assets/img/portfolio/logo_belcash.png' },
    { name: 'Hello Solar', logo: '/assets/img/portfolio/hs-logo.png' },
    { name: 'TLC', logo: '/assets/img/portfolio/tlc_logo.png' },
    { name: 'Haile', logo: '/assets/img/portfolio/haile-logo.png' },
    { name: 'Kelib', logo: '/assets/img/portfolio/keliblogo.png' }
  ]

  return (
    <section id="clients" className="clients section">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Clients</span>
        <h2>My Clients</h2>
        <p>I've worked with various clients, each with different needs and requirements.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 justify-content-center align-items-center">
          {clients.map((client) => (
            <div key={client.name} className="col-6 col-sm-4 col-md-2 text-center">
              <img src={client.logo} alt={client.name} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

