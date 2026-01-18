import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      
      if (link && link.hash) {
        e.preventDefault()
        const targetId = link.hash.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          const headerOffset = 100
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })

          // Update active nav link
          document.querySelectorAll('.navmenu a').forEach((navLink) => {
            navLink.classList.remove('active')
          })
          link.classList.add('active')
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

