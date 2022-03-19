import React from 'react'
import './topbar.scss'
import {//Person, 
  Mail, LinkedIn, GitHub} from '@material-ui/icons'
import ParticlesBackground from '../particles/ParticlesBackground'
import { Link } from '@material-ui/core'


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    
    <React.Fragment>
      <ParticlesBackground />
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo' style={{color: menuOpen ? 'white' : 'black'}}>مرحبا</a>
            {/* <div className="itemContainer">
              <Person className='icon'/>
              <span>917-675-1559</span>
            </div> */}
            <div className="itemContainer">
              <Mail className='icon'/>
              <span >mr.hraihan@gmail.com</span>
            </div>
            <div className="itemContainer">
              <LinkedIn className='icon'/>
              <Link href="https://www.linkedin.com/in/hishamraihan/" className='link' target='_blank' rel="noreferrer" style={{color: menuOpen ? 'white' : 'black'}}>HishamRaihan</Link>
            </div>
            <div className="itemContainer">
              <GitHub className='icon'/>
              <Link href="https://github.com/HishamRaihan" className='link' target='_blank' rel="noreferrer" style={{color: menuOpen ? 'white' : 'black'}}>HishamRaihan</Link>
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
    </React.Fragment>
  )
}
