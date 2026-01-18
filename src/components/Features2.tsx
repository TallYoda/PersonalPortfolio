export default function Features2() {
  const experience = [
    {
      title: 'Web Developer / Creative Project Manager',
      period: '2023 - Present',
      location: 'Freelance, Addis Ababa, Ethiopia',
      bullets: [
        'Designed and developed websites and portfolios for visual artists and small businesses using Bootstrap.',
        'Guided artists in refining portfolios, grant applications, and exhibition materials.',
        'Managed client communication, scheduling, and deliverables to ensure smooth project completion.',
        'Wrote and edited SEO-optimized content to improve online visibility.',
        'Provided visual support through photography, layout design, and digital editing.'
      ]
    },
    {
      title: 'Operations and Communications Assistant',
      period: '2023 - 2025',
      location: 'Zumbara Mining plc, Addis Ababa, Ethiopia',
      bullets: [
        'Supported business operations for an investment consultancy in Ethiopia’s mining sector.',
        'Drafted and compiled investor pitch materials and project proposals.',
        'Coordinated communication between consultants, investors, and regulatory offices.',
        'Maintained organized digital records and contributed to client-facing presentations.'
      ]
    },
    {
      title: 'Office Manager',
      period: '2021 - 2022',
      location: 'Trades Labour Corporation, Calgary, Alberta, Canada',
      bullets: [
        'Oversaw day-to-day office operations for a labour sourcing company.',
        'Coordinated communication between job sites, field workers, and management.',
        'Managed scheduling, documentation, and payroll support tasks.',
        'Advanced from front desk to management through reliability and strong organization.'
      ]
    },
    {
      title: 'Content Writer',
      period: '2021',
      location: 'Quinnstar Productions, Calgary, Alberta, Canada',
      bullets: [
        'Created and published content across multiple blog pages.',
        'Produced up to five articles daily.',
        'Applied SEO to improve visibility, traffic, and engagement.'
      ]
    },
    {
      title: 'Web Development and Copywriting',
      period: '2019',
      location: 'Belcash Technologies, Addis Ababa, Ethiopia',
      bullets: [
        'Built and maintained websites using licensed company software.',
        'Created, revised, and posted website content.',
        'Handled SEO and link-building initiatives.',
        'Engaged clients directly to understand requirements.'
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
              <h4 className="mb-2">Jote Tolesa Shagi</h4>
              <p className="mb-3">
                Reliable and adaptable professional with experience in office coordination,
                investor relations, and web development. Skilled in managing daily operations,
                maintaining clear communication, and using digital tools to support smooth
                business processes.
              </p>
              <ul className="list-unstyled mb-3">
                <li>Addis Ababa, Ethiopia</li>
                <li>+251 9452152</li>
                <li>joteshagi@gmail.com</li>
              </ul>
              <h5 className="mb-2">Skills</h5>
              <ul className="list-unstyled mb-0">
                <li>Front-end Web Design</li>
                <li>Operations & Office Management</li>
                <li>Dispatch & Workforce Coordination</li>
                <li>Communication & Client Relations</li>
                <li>Photography & Editing</li>
                <li>Microsoft Excel/Access/PowerPoint</li>
                <li>Project Management Tools</li>
                <li>Project Organization & Reporting</li>
              </ul>
            </div>

            <h3 className="mt-5 mb-3">Education</h3>
            <div className="d-grid gap-3">
              <div className="p-4 border rounded-3 bg-white shadow-sm">
                <h4 className="mb-1">St. Joseph Highschool</h4>
                <div className="text-muted">2014 - 2018</div>
                <p className="mb-0">Highschool Diploma</p>
              </div>
              <div className="p-4 border rounded-3 bg-white shadow-sm">
                <h4 className="mb-1">Addis Ababa University</h4>
                <div className="text-muted">2019 - 2021</div>
                <p className="mb-0">Computer Science Department (3.2 GPA until withdrawal)</p>
              </div>
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

