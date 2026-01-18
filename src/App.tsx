import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import FeaturesCards from './components/FeaturesCards'
import Features2 from './components/Features2'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import { initApp } from './utils/init'

function App() {
  useEffect(() => {
    initApp()
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Features />
        <About />
        <Clients />
        <Services />
        <Testimonials />
        <FeaturesCards />
        <Features2 />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App

