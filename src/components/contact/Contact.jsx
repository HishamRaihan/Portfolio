import React, { useState } from 'react'
import './contact.scss'
// import thai from '../../assets/thai.png'
import thai from '../../assets/thai.png'
import { ContactUs } from './ContactUs'


export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setMessage(true)

  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <h2>Contact Me</h2>
       <ContactUs />
    </div>
      <div className="right">
        <img src={thai} alt="" />
      </div>
    </div>
  )
}