import React from 'react'
import "./AboutContent.css"

import {Link} from 'react-scroll'


function AboutContent() {
  return (
    <div className='aboutContent'>
      <div className='aboutContent__Container'>

        <h1>Rafeek Mohamed Infath</h1>
        <p>A Professional full stack Developer 🧑‍💻</p>

        <a href='https://drive.google.com/file/d/1pcUGKtd8fOzdz-sUWu93yx0eTzfDnC28/view?usp=share_link' target="_blank" rel="noopener noreferrer">

            <button className='aboutContent__DownloadButton'>Download CV</button>
        </a>

        <Link to="project" smooth={true} duration={500}>
            <button className='aboutContent__WorkButton'>My Work</button>
        </Link>

      </div>
    </div>
  )

}

export default AboutContent
