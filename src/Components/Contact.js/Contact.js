import React from 'react'
import "./contact.css"

import img3 from '../../assets/img3.gif'

import { IconButton } from '@material-ui/core'
import {Facebook, LinkedIn,Instagram, GitHub} from "@material-ui/icons"

import {Element} from 'react-scroll'


const Contact = () => {
  return (
    <Element name="contact" className='contact'>
        <h1><u>Contact</u></h1>

        <div className='Contact__Container'>
            <p>
                Gmail ID : <span>mohamedinfath99@gmail.com</span>
            </p>


            <div className='"contact__icons'>
            <a href='https://www.facebook.com/mohamedinfath99' target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>

                <a href='https://www.linkedin.com/in/mohamedinfath99' target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>

                <a href='https://www.instagram.com/mohamedinfath99/' target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>

                <a href='https://github.com/Infath99' target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <GitHub/>
                    </IconButton>
                </a>

                <br />
                <br />

                <div className='contact__icons__img'>
                    <img src={img3} alt="Code" />
                </div>
                
            </div>
        </div>
    </Element>
    
  )
}

export default Contact
