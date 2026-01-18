export default function Testimonials() {
  const testimonials = [
    {
      name: 'Justin Lal',
      role: 'General Manager, TLC',
      quote:
        'As an employee, Jotie was always a pleasure to work with. He led day-to-day operations, identified issues, worked well with others, and met time constraints. Jotie would be a valued addition to any team.',
      image: '/assets/img/portfolio/placeholder.webp'
    },
    {
      name: 'Nathan Ayele',
      role: 'Marketing at Belcash',
      quote: 'Jote really helped grow the visibility of our business online. Gets the job done, highly recommend.',
      image: '/assets/img/portfolio/placeholder.webp'
    }
  ]

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Testimonials</span>
        <h2>Testimonials</h2>
        <p>What clients and collaborators have to say.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {testimonials.map((item) => (
            <div key={item.name} className="col-lg-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle me-3"
                      style={{ width: '56px', height: '56px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-0">{item.name}</h5>
                      <small className="text-muted">{item.role}</small>
                    </div>
                  </div>
                  <p className="mb-0">“{item.quote}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

