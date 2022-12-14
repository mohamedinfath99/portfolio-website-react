import React from 'react'
import "./SkillContainer.css"

import codeImg from '../../assets/codee.gif'

import {Element} from 'react-scroll'    // use for scroll function

import { LinearProgress } from '@material-ui/core'  // use for LinearProgress bar #install material ui


const SkillContainer = () => {
  return (
    <Element name= "skills" duration={500} className="SkillContainer">
      
        <div className='SkillContainer__img'>
          <img src={codeImg} alt="Code" />
        </div>

        <div className='SkillContainer__Text'>
          <h2><u>Skill Set</u></h2>
          
        <br />

          <div className='SkillContainer__skillSet'>
            <h5>React Js</h5>
            <div className='SkillContainer__slider SkillContainer__slider1'>
              <LinearProgress  variant="determinate" value={90}/>
            </div>
          </div>

          <br />

          <div className='SkillContainer__skillSet'>
            <h5>Node Js</h5>
            <div className='SkillContainer__slider SkillContainer__slider2'>
              <LinearProgress  variant="determinate" value={85}/>
            </div>
          </div>

          <br />

          <div className='SkillContainer__skillSet'>
            <h5>Express Js</h5>
            <div className='SkillContainer__slider SkillContainer__slider3'>
              <LinearProgress  variant="determinate" value={70}/>
            </div>
          </div>

          <br />

          <div className='SkillContainer__skillSet'>
            <h5>Mongo DB</h5>
            <div className='SkillContainer__slider SkillContainer__slider4'>
              <LinearProgress  variant="determinate" value={60}/>
            </div>
          </div>

          <br />

          <div className='SkillContainer__skillSet'>
            <h5>MySQL</h5>
            <div className='SkillContainer__slider SkillContainer__slider5'>
              <LinearProgress  variant="determinate" value={90}/>
            </div>
          </div>

          <br />

          <div className='SkillContainer__skillSet'>
            <h5>AWS</h5>
            <div className='SkillContainer__slider SkillContainer__slider6'>
              <LinearProgress  variant="determinate" value={40}/>
            </div>
          </div>


        </div>




    </Element>
  )
}

export default SkillContainer

