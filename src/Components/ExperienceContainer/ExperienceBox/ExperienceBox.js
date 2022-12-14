import React from 'react'
import "./ExperienceBox.css"

const experienceBox = ({number,title,style}) => {
  return (
    <div style={{...style}} className="expBox">
        <h1>{number}</h1>
        <br />
        <p>{title}</p>
      
    </div>
  )
}

export default experienceBox
