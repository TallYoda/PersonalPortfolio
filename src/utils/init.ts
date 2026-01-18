/**
 * Initialize all third-party libraries and app functionality
 */
import AOS from 'aos'
import GLightbox from 'glightbox'
import { Swiper } from 'swiper'

export function initApp(): void {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })

  // Initialize GLightbox
  GLightbox({
    selector: '.glightbox'
  })

  // Initialize Swiper sliders
  initSwiper()

  // Initialize Pure Counter
  initPureCounter()

  // Initialize scroll spy
  initScrollSpy()

  // Handle hash links on page load
  handleHashLinks()
}

/**
 * Navmenu Scrollspy
 */
function initScrollSpy(): void {
  const navmenulinks = document.querySelectorAll('.navmenu a')

  function navmenuScrollspy(): void {
    navmenulinks.forEach((navmenulink) => {
      const link = navmenulink as HTMLAnchorElement
      if (!link.hash) return
      const section = document.querySelector(link.hash) as HTMLElement | null
      if (!section) return
      const position = window.scrollY + 200
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach((activeLink) => {
          activeLink.classList.remove('active')
        })
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  window.addEventListener('load', navmenuScrollspy)
  window.addEventListener('scroll', navmenuScrollspy)
}

/**
 * Correct scrolling position upon page load for URLs containing hash links.
 */
function handleHashLinks(): void {
  if (window.location.hash) {
    const section = document.querySelector(window.location.hash) as HTMLElement | null
    if (section) {
      setTimeout(() => {
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop, 10),
          behavior: 'smooth'
        })
      }, 100)
    }
  }
}

/**
 * Init swiper sliders
 */
function initSwiper(): void {
  document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
    const configElement = swiperElement.querySelector('.swiper-config') as HTMLElement | null
    if (!configElement) return
    
    try {
      const config = JSON.parse(configElement.innerHTML.trim())
      new Swiper(swiperElement as HTMLElement, config)
    } catch (error) {
      console.error('Error parsing Swiper config:', error)
    }
  })
}

/**
 * Pure Counter implementation
 */
function initPureCounter(): void {
  const counters = document.querySelectorAll('.purecounter')
  
  const animateCounter = (element: HTMLElement): void => {
    const start = parseFloat(element.getAttribute('data-purecounter-start') || '0')
    const end = parseFloat(element.getAttribute('data-purecounter-end') || '0')
    const duration = parseFloat(element.getAttribute('data-purecounter-duration') || '2') * 1000
    
    if (isNaN(start) || isNaN(end) || isNaN(duration)) return
    
    const startTime = performance.now()
    const isDecimal = end % 1 !== 0
    
    const updateCounter = (currentTime: number): void => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = start + (end - start) * easeOutQuart
      
      element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toString()
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = isDecimal ? end.toFixed(1) : Math.floor(end).toString()
      }
    }
    
    // Use Intersection Observer to start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(updateCounter)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    observer.observe(element)
  }
  
  counters.forEach((counter) => {
    animateCounter(counter as HTMLElement)
  })
}

