import React from 'react'
import './intro.scss'
  import { init } from 'ityped'
import { useEffect, useRef } from 'react'


export default function Intro() {
  
  // works like document and queryselector
  const textRef = useRef()

  useEffect(() =>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Project Manager', 'Software Developer', 'Designer'], 
    })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/portrait.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>السلام عليكم</h2>
          <h2>My name is</h2>
          <h1>Hisham Raihan</h1>
          <h3>What I Do: <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
