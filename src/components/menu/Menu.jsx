import React from 'react'
// import ParticlesBackground from '../particles/ParticlesBackground'
import './menu.scss'

// in menu background add interactive galaxy ************* Dont Forget
export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <React.Fragment>
{/* <ParticlesBackground /> */}
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    </React.Fragment>
  )
}
