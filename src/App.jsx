import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import MyServices from './Components/MyServices/MyServices'
import ProjectCarousel from './Components/ProjectCarousel/ProjectCarousel'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <MyServices/>
      <ProjectCarousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App