export default function Features2() {
  const experience = [
    {
      title: 'Freelance Web and Graphics Design',
      period: '2023 - Present',
      location: 'Addis Abeba, Ethiopia',
      bullets: [
        'Design, development, and implementation of the graphic, layout, and production of professional webpages and landing sites.',
        'Draft and implement social media campaigns for different businesses.',
        'Supervise the assessment of all graphic materials to ensure quality and accuracy.',
        'Take, edit, and post photographs for websites and social media accounts.'
      ]
    },
    {
      title: 'Dispatcher/Office Manager',
      period: '2021 - 2022',
      location: 'Trades Labour Corporation, Calgary Alberta, Canada.',
      bullets: [
        'Handled all day to day operations of the branch.',
        'Worked in a high stakes, high pressure environment.',
        'Handled both client and worker communications.',
        'Made significant changes to the internal workflow of the company.'
      ]
    },
    {
      title: 'Content Writer',
      period: '2021',
      location: 'Quinnstar Productions, Calgary Alberta, Canada.',
      bullets: [
        'Wrote, edited, and published various content for different blog pages.',
        'Published up to 5 articles per day.',
        'Worked on SEO and page visibility to drive traffic and engagement.'
      ]
    },
    {
      title: 'Web Developer and Content Writer',
      period: '2019 - 2020',
      location: 'Belcash Technologies, Addis Ababa, Ethiopia',
      bullets: [
        'Used licensed company software to make websites and handle SEO and link-building.',
        'Wrote, edited and published content for websites.',
        'Personally corresponded with clients to understand their requirements.',
        'Supervised 3 other designers on larger projects.'
      ]
    }
  ]

  return (
    <section id="resume" className="features-2 section">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Resume</span>
        <h2>Resume</h2>
        <p>
          I'm a freelance web dev based in Addis, focusing on web design, graphics, and content
          writing. I make responsive and dynamic landing pages.
        </p>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="mb-3">Summary</h3>
            <div className="p-4 border rounded-3 bg-white shadow-sm">
              <h4 className="mb-2">Jote Shagi</h4>
              <p className="mb-3">
                Innovative and deadline-driven Website Developer with 3+ years of experience
                designing and developing user-centered websites from initial concept to final,
                polished deliverable.
              </p>
              <ul className="list-unstyled mb-0">
                <li>Addis Ababa, Ethiopia</li>
                <li>+251 945-218-252</li>
                <li>joteshagi@gmail.com</li>
              </ul>
            </div>

            <h3 className="mt-5 mb-3">Education</h3>
            <div className="p-4 border rounded-3 bg-white shadow-sm">
              <h4 className="mb-1">Highschool Diploma</h4>
              <div className="text-muted">2014 - 2018</div>
              <p className="mb-0">St. Joseph High School, Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="mb-3">Professional Experience</h3>
            <div className="d-grid gap-4">
              {experience.map((role) => (
                <div key={role.title} className="p-4 border rounded-3 bg-white shadow-sm">
                  <h4 className="mb-1">{role.title}</h4>
                  <div className="text-muted mb-2">{role.period}</div>
                  <div className="text-muted mb-3">{role.location}</div>
                  <ul className="mb-0">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

