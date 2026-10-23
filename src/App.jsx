import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import MyServices from './Components/MyServices/MyServices'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <MyServices />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App