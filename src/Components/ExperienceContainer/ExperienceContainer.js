import React from 'react'
import "./ExperienceContainer.css"

import ExperienceBox from "./ExperienceBox/ExperienceBox"

import {Element} from 'react-scroll'



const ExperienceContainer = () => {
  return (
    <Element name="experience" className="expContainer">
        <h1><u>Experience</u></h1>
        <div className='expContainer__four'>
          <ExperienceBox number="06 M" title={"Work Experience"}/>
          <ExperienceBox number="07" title={"Project"} style={{backgroundColor: "tomato"}}/>
          <ExperienceBox number="02" title={"Freelancer Project"}/>
          <ExperienceBox number="01" title={"Clients"}/>
        </div>

    </Element>
  )
}

export default ExperienceContainer
