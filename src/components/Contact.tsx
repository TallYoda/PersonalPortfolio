import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      emailjs.init('Z5PCzySFzbca8pz-3')
    } catch (e) {
      console.warn('EmailJS init warning:', e)
    }
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)
    setSent(false)

    emailjs
      .sendForm(
        'service_8ntxn79',
        'template_j366c88',
        e.currentTarget,
        'Z5PCzySFzbca8pz-3'
      )
      .then((result) => {
        console.log('EmailJS success:', result)
        setSent(true)
        setLoading(false)
        e.currentTarget.reset()
        // Reset success message after 5 seconds
        setTimeout(() => setSent(false), 5000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        const message = (err && (err.text || err.message)) || 'Failed to send message.'
        setErrorMessage(String(message))
        setLoading(false)
      })
  }

  return (
    <section id="contact" className="contact section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Contact</span>
        <h2>Contact</h2>
        <p>I prefer email for correspondence, but feel free to call if that's more your style.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact Me</div>
              <h2 className="display-5 mb-4">
                Let's build something that gives your business a fresh digital look.
              </h2>
              <p className="lead mb-4">
                I'm available for website, graphics, and SEO needs. Drop me a line and I'll get back to you.
              </p>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>joteshagi@gmail.com</span>
                </div>

                <div className="info-item d-flex mb-3" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-telephone me-3"></i>
                  <span>+251 945 218 252</span>
                </div>

                <div className="info-item d-flex mb-4" data-aos="fade-up" data-aos-delay="500">
                  <i className="bi bi-geo-alt me-3"></i>
                  <span>Ayat Mall, Lemi Kurra, Addis Ababa</span>
                </div>

                <a href="mailto:joteshagi@gmail.com" className="map-link d-inline-flex align-items-center" data-aos="fade-up" data-aos-delay="600">
                  Email Me
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="600">
                  <div className="row gy-4">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading" style={{ display: loading ? 'block' : 'none' }}>
                        Loading
                      </div>
                      {errorMessage && (
                        <div className="error-message text-danger mb-3">{errorMessage}</div>
                      )}
                      {sent && (
                        <div className="sent-message text-success mb-3">
                          Your message has been sent. Thank you!
                        </div>
                      )}

                      <button type="submit" className="btn btn-submit w-100" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
