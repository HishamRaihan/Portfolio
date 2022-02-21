import React from 'react'
import './topbar.scss'
import {Person, Mail, LinkedIn, GitHub} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo'>مرحبا</a>
            <div className="itemContainer">
              <Person className='icon'/>
              <span>917-675-1559</span>
            </div>
            <div className="itemContainer">
              <Mail className='icon'/>
              <span>mr.hraihan@gmail.com</span>
            </div>
            <div className="itemContainer">
              <LinkedIn className='icon'/>
              <a href="https://www.linkedin.com/in/hishamraihan/">HishamRaihan</a>
            </div>
            <div className="itemContainer">
              <GitHub className='icon'/>
              <a href="https://github.com/HishamRaihan">HishamRaihan</a>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
      </div>
    </div>
  )
}
