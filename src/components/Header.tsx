import { useEffect, useState } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNavActive, setMobileNavActive] = useState(false)
  
  useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileNav = () => {
    const newState = !mobileNavActive
    setMobileNavActive(newState)
    // Toggle body class for mobile nav
    if (newState) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }
  }

  const handleNavClick = () => {
    if (mobileNavActive) {
      setMobileNavActive(false)
      document.body.classList.remove('mobile-nav-active')
    }
  }

  // Handle dropdown toggles
  useEffect(() => {
    const toggleDropdowns = document.querySelectorAll('.navmenu .toggle-dropdown')
    
    toggleDropdowns.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = (e.currentTarget as HTMLElement).parentElement
        const nextSibling = parent?.nextElementSibling as HTMLElement | null
        
        if (parent) {
          parent.classList.toggle('active')
        }
        if (nextSibling) {
          nextSibling.classList.toggle('dropdown-active')
        }
        e.stopImmediatePropagation()
      })
    })

    return () => {
      toggleDropdowns.forEach((toggle) => {
        toggle.removeEventListener('click', () => {})
      })
    }
  }, [])

  return (
    <header 
      id="header" 
      className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Look! My Portfolio.</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={handleNavClick}>Home</a></li>
            <li><a href="#works" onClick={handleNavClick}>Works</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#services" onClick={handleNavClick}>Services</a></li>
            <li><a href="#clients" onClick={handleNavClick}>Clients</a></li>
            <li><a href="#testimonials" onClick={handleNavClick}>Testimonials</a></li>
            <li><a href="#resume" onClick={handleNavClick}>Resume</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <a className="btn-getstarted" href="#works">View Work</a>
      </div>
    </header>
  )
}

