import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'

import AboutContainer from './Components/AboutContainer/AboutContainer'
import SkillContainer from './Components/SkillContainer/SkillContainer'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer'
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer'
import Contact from './Components/Contact.js/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header />
      <AboutContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
