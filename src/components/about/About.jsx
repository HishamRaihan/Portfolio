import React, { useState } from 'react'
import './about.scss'
import life from '../../assets/life3.png'
import Experience from '../Experience/Experience'

export default function About() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setMessage(true)

  }
  return (
    <div className='about' id='about'>
      <div className="left">
        <img src={life} alt="" />
      </div>
      <div className="right">
        <h2>Skills I Have</h2>
        <Experience/>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I will reply soon!</span>}
        </form> */}
      </div>
    </div>
  )
}
