export default function About() {
  const skills = [
    { name: 'React/TypeScript', level: '90%' },
    { name: 'Adobe Illustrator', level: '70%' },
    { name: 'HTML5/CSS3', level: '99%' },
    { name: 'Bootstrap', level: '87%' },
    { name: 'Python for Chatbots', level: '85%' },
    { name: 'Canva', level: '88%' },
    { name: 'Microsoft Excel', level: '80%' }
  ]

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="section-header">
              <span className="section-badge">ABOUT ME</span>
              <h2>Hello There! I'm Jote.</h2>
            </div>
            <p className="lead-text">
              I'm a uni drop-out (5 semesters &amp; 3.4 CGPA) that loves art, music, sci-fi
              novels, and running.
            </p>
            <p className="description-text">
              I started web dev as a full time job straight out of highschool and have worked
              numerous gigs ever since. I worked at Africa118 to make landing sites for many
              small businesses around the city.
            </p>
            <p className="description-text">
              I also completed projects during my computer science education in AAU and have
              worked as a Dispatcher and Office Manager in a labour agency in Canada, learning
              how to effectively run a business.
            </p>
            <p className="description-text">
              Right now I'm focused on building landing pages, writing content, and bringing
              people's works and vision into the online world.
            </p>
            <a href="#resume" className="btn-primary">Check out my CV</a>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="visual-section">
              <img
                src="/assets/img/portfolio/portrait.jpg"
                alt="Jote Tolesa portrait"
                className="img-fluid rounded-3 mb-4"
              />
              <h3 className="h5 mb-3">Skills</h3>
              <div className="row g-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="col-12">
                    <div className="d-flex justify-content-between">
                      <strong>{skill.name}</strong>
                      <span>{skill.level}</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: skill.level }}
                        aria-valuenow={parseInt(skill.level, 10)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

