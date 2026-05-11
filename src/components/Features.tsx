import { useMemo, useState } from 'react'

export default function Features() {
  const categories = ['All', 'Web', 'Design', 'Branding', 'Software']
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    {
      id: 'project-the-dialogue',
      title: 'The Dialogue - Immersive Exhibition',
      category: 'Web',
      subtitle: 'Collaborative Text-Based Adventure',
      image: '/assets/img/portfolio/main.png'
    },
    {
      id: 'project-yilugnta-app',
      title: 'Yilugnta - Social Accountability App',
      category: 'Software',
      subtitle: 'Auto-share Screen Time with Friends',
      image: '/assets/img/portfolio/yilugnta-welcome.png'
    },
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
      id: 'software',
      title: 'Chereta4us Tender Bot',
      category: 'Software',
      subtitle: 'Automation Bot',
      image: '/assets/img/portfolio/tender-bot.svg'
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
                  {(() => {
                    const isYilugntaWelcome = project.image.includes('yilugnta-welcome')
                    return (
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      height: '220px',
                      objectFit: isYilugntaWelcome ? 'contain' : 'cover',
                      objectPosition: 'top',
                      backgroundColor: isYilugntaWelcome ? '#0B141A' : 'transparent'
                    }}
                  />
                    )
                  })()}
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
