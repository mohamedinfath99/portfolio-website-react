import React from 'react'
import "./AboutContainer.css"

import AboutContent from './AboutContent/AboutContent'

import {Element} from 'react-scroll'    // use for scroll function



function AboutContainer() {
  return (
    <Element name='about' className='aboutContainer'>
      <AboutContent />
    </Element>
  )
}

export default AboutContainer;
