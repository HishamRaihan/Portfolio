import React from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
// import Contact from './components/about/About'
import './app.scss'
import { useState } from 'react'
import Menu from './components/menu/Menu'
// import Experience from './components/Experience/Experience'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { ContactUs } from './components/contact/ContactUs'
// import ParticlesBackground from './components/particles/ParticlesBackground'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <React.Fragment>
    {/* <ParticlesBackground /> */}
    <div className="app">
      {/* <ParticlesBackground /> */}
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <div className="sections">
     <Intro />
     <Portfolio />
     <Works />
     <Testimonials />
     <About />
    <ContactUs />
     <Contact />
   </div>
    </div>
    </React.Fragment>
  );
}

export default App;
