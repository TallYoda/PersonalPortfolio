export default function FeaturesCards() {
  const projects = [
    {
      id: 'project-hello-solar',
      title: 'Hello Solar - Website',
      summary:
        'This project required extensive front-end work with some backend elements for the blog page.',
      image: '/assets/img/portfolio/solar-first.webp',
      label: 'Product Landing Page',
      type: 'Design',
      details:
        'This site has consistent color themes, custom animations and design elements for a sleek, responsive product landing page. It also incorporates a blog page thats easy to edit on the client side.',
      work: ['Design', 'HTML5/CSS3/Bootstrap', 'Blog Page', 'Content'],
      link: 'https://www.hellosolarint.com/',
      gallery: ['/assets/img/portfolio/hellosolar-snap-p2.webp', '/assets/img/portfolio/solar-page2.webp']
    },
    {
      id: 'project-visual-artist-portfolio',
      title: 'Portfolio Site for Visual Artist',
      summary:
        'A Portfolio Website done using Typescript and CSS, self hosted on Vercel.',
      image: '/assets/img/portfolio/mikiyas4.webp',
      label: 'Website',
      type: 'Web',
      details:
        'A lite weight Bootstrap Template that was converted into a React/TypeScript project.',
      work: ['Coded in Typescript', 'Fully Functional Email Contact Form with EmailJS', 'Wrote and Edited Artist statement and Bio'],
      link: 'https://studio-mikiyas.vercel.app/',
      gallery: ['/assets/img/portfolio/mikiyas6.webp', '/assets/img/portfolio/mikiyas5.webp']
    },
    {
      id: 'project-tlc',
      title: 'Trades Labour Corporation - Website',
      summary:
        'TLC is a labour agency based in Canada where I worked as a dispatcher and then office manager for 2 years.',
      image: '/assets/img/portfolio/tlc-final.webp',
      label: 'Business Landing Page',
      type: 'Design',
      details:
        'Building this site was an extensive project due to the numerous branches of the company. It required streamlining the code base and includes a 24/7 support chatbot and PHP script for the contact page.',
      work: ['Design', 'HTML5/CSS3/Bootstrap', 'Support chatbot integrated', 'PHP script for email forms'],
      link: 'https://www.tradeslabour.com/',
      gallery: ['/assets/img/portfolio/tlc-pages2.webp', '/assets/img/portfolio/tlc-snap2.webp']
    },
    {
      id: 'project-kelib-branding',
      title: 'Kelib Shoes - Branding & Social Media',
      summary:
        'I worked on content for their Instagram page and helped run social media ad campaigns to drive engagement.',
      image: '/assets/img/portfolio/kelib2.webp',
      label: 'Social Media Campaign',
      type: 'Design',
      details:
        'This is one of my favorite projects because of how aesthetic-centered it was. I edited, color-graded, and published various content.',
      work: ['Designs on Adobe Illustrator', 'SEO', 'Instagram Posts', 'Photography'],
      link: '#contact',
      gallery: ['/assets/img/portfolio/6.webp', '/assets/img/portfolio/3.webp']
    },
    {
      id: 'project-vintage-shirt',
      title: 'Vintage T-shirt Designs',
      summary:
        'A personal project for vintage-themed merch inspired by old postage stamp designs.',
      image: '/assets/img/portfolio/concept-shirt.webp',
      label: 'Vintage Ethiopic',
      type: 'Digital Art',
      details:
        'We wanted a unique Ethiopian design for vintage merch. I did the entire design natively in Adobe Illustrator.',
      work: ['Digital illustration', 'Print machine friendly design', 'Sales'],
      link: '#works',
      gallery: ['/assets/img/portfolio/Eritre-both.webp', '/assets/img/portfolio/Eri-2.webp']
    },
    {
      id: 'project-pillar-x',
      title: 'Pillar X Construction Materials',
      summary:
        'Drafted logo, brand guideline, and social media campaign for a construction materials importer.',
      image: '/assets/img/portfolio/killme.webp',
      label: 'Branding & Logo',
      type: 'Design',
      details:
        'The brand guideline employs consistent color themes, typography, and design elements for a versatile brand identity.',
      work: ['Logo Design', 'Color Palette', 'Typography', 'Posters'],
      link: '#works',
      gallery: ['/assets/img/portfolio/colordone.webp', '/assets/img/portfolio/pilarpic.webp']
    } 
  ]

  return (
    <section id="projects" className="features-cards section">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Project Details</span>
        <h2>Project Highlights</h2>
        <p>A closer look at recent work and deliverables.</p>
      </div>

      <div className="container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={project.id}
            className={`row align-items-center g-4 mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            data-aos="fade-up"
            data-aos-delay={100 + index * 50}
          >
            <div className="col-lg-6">
              <img src={project.image} alt={project.title} className="img-fluid rounded-3 shadow-sm" />
              <div className="row g-3 mt-2">
                {project.gallery.map((image) => (
                  <div key={image} className="col-6">
                    <img src={image} alt={`${project.title} gallery`} className="img-fluid rounded-3" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge mb-2 d-inline-flex">Project</span>
              <h3 className="mb-3">{project.title}</h3>
              <p className="text-muted">{project.summary}</p>
              <div className="mb-3">
                <span className="text-uppercase text-muted">{project.label}</span>
                <div className="fw-semibold">{project.type}</div>
              </div>
              <p>{project.details}</p>
              <h6 className="mt-4">What I did</h6>
              <ul>
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.link} className="btn-primary">
                {project.link.startsWith('http') ? 'Visit Website' : 'Back to Portfolio'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

