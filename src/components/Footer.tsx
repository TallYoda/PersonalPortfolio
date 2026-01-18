export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="#hero" className="logo d-flex align-items-center">
              <span className="sitename">MyPortfolio.</span>
            </a>
            <p>
              Freelance web dev and graphics designer based in Addis Ababa. Available for website,
              graphics, and SEO needs.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Design</a></li>
              <li><a href="#services">Graphic Design</a></li>
              <li><a href="#services">SEO & Social Media</a></li>
              <li><a href="#services">Chatbots</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact</h4>
            <p>Ayat Mall, Lemi Kurra</p>
            <p>Addis Ababa, Ethiopia</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+251 945 218 252</span></p>
            <p><strong>Email:</strong> <span>joteshagi@gmail.com</span></p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">MyPortfolio</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by me
        </div>
      </div>
    </footer>
  )
}

