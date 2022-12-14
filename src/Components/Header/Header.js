import React, { useState } from 'react'
import "./Header.css"
import {Link} from 'react-scroll' // npm install react-scroll


const Header = () => {

  const [selected, setSelected] = useState(true)

  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Develop<span>er</span> </h1>
        </div>

        <div className='header__right'>


            <Link to="about" smooth={true} duration={500}>
                <h4 className={
              selected === "about" ? "header__right--active" : undefined }
            onClick={() => setSelected("about")}>ABOUT</h4>
            </Link>



            <Link to="skills" smooth={true} duration={500}>
                <h4 className={
              selected === "skills" ? "header__right--active" : undefined }
            onClick={() => setSelected("skills")}>SKILLS</h4>
            </Link>



            <Link to="project" smooth={true} duration={500}>
                <h4 className={
              selected === "project" ? "header__right--active" : undefined }
            onClick={() => setSelected("project")}>PROJECT</h4>
            </Link>



            <Link to="experience" smooth={true} duration={500}>
                <h4 className={selected === "experience" ? "header__right--active" : undefined}
            onClick={() => setSelected("experience")}>EXPERIENCE</h4>
            </Link>



            <Link to="contact" smooth={true} duration={500}>
                <h4 className={
              selected === "contact" ? "header__right--active" : undefined }
            onClick={() => setSelected("contact")}>CONTACT</h4>
            </Link>

            {/* <h4 className='header__rightButton'>JOIN WITH ME</h4> */}
        </div>
      
    </div>
  )
}

export default Header
