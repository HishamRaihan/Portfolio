import React from 'react'
// import ParticlesBackground from '../particles/ParticlesBackground'
import './menu.scss'
import qr from '../../assets/HonestQR.png'

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
          <a href="#works">Certifications</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
      <div className='img-container'>
      <img src={qr} alt="" />
      </div>
    </div>
    </React.Fragment>
  )
}
