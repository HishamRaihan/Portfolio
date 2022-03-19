import React, { useState } from 'react'
import './contact.scss'
// import thai from '../../assets/thai.png'
import brothers from '../../assets/brothers.png'


export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setMessage(true)

  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={brothers} alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I will reply soon!</span>}
        </form>
      </div>
    </div>
  )
}