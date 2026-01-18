import { useMemo, useState } from 'react'

export default function Features() {
  const categories = ['All', 'Web', 'Design', 'Branding']
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    {
      id: 'project-hello-solar',
      title: 'Hello Solar',
      category: 'Web',
      subtitle: 'Website',
      image: '/assets/img/portfolio/solar-first.webp'
    },
    {
      id: 'project-tlc',
      title: 'Trades Labour Corporation',
      category: 'Web',
      subtitle: 'Website & Content',
      image: '/assets/img/portfolio/tlc-last.webp'
    },
    {
      id: 'project-kelib-branding',
      title: 'Kelib Workshop',
      category: 'Branding',
      subtitle: 'Branding and Social Media',
      image: '/assets/img/portfolio/3.webp'
    },
    {
      id: 'project-vintage-shirt',
      title: 'Digital Concept Art for Vintage T-shirt Print',
      category: 'Design',
      subtitle: 'Design',
      image: '/assets/img/portfolio/Eritre-both.webp'
    },
    {
      id: 'project-pillar-x',
      title: 'Pillar X',
      category: 'Branding',
      subtitle: 'Branding',
      image: '/assets/img/portfolio/x.webp'
    },
    {
      id: 'project-visual-artist-portfolio',
      title: 'Artist Portfolio Site',
      category: 'Web',
      subtitle: 'Website',
      image: '/assets/img/portfolio/Mikiyas.webp'
    }
  ]

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory, projects])

  return (
    <section id="works" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Works</span>
        <h2>Selected Works</h2>
        <p>Freelance graphics designer &amp; web developer</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                className={`btn btn-sm ${isActive ? 'btn-dark' : 'btn-outline-secondary'}`}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="row g-4">
          {visibleProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <a href={`#${project.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title mb-1">{project.title}</h5>
                    <p className="card-text text-muted mb-0">{project.subtitle}</p>
                    <small className="text-uppercase text-muted">{project.category}</small>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
