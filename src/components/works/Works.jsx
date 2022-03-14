import React, { useState } from 'react'
import './works.scss'
// import mobile from '../../assets/mobile.png'
import csm from '../../assets/seal-csm.png'
import ga from '../../assets/general-assembly_logo.png'
import CSM from '../../assets/CSM.png'
import arrow from '../../assets/arrow.png'
// import globe from '../../assets/globe.png'
// import game from '../../assets/tictactoe.png'
import coming from '../../assets/Coming.png'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

   const data = [
    {
      id: "1",
      icon: `${csm}`,
      title: "Scrum Master",
      desc:
        "Organizations need empowered and aligned Agile teams, ready to engage in solutions that deliver value,and directly correlate to the bottom line. Empower your Agile teams with globally recognized certifications from Scrum Alliance® and drive value for your business",
      img:
        `${CSM}`,
    },
    {
      id: "2",
      icon: `${ga}`,
      title: "General Assembly",
      desc:
        "Full-stack software engineering immersive student in an intensive, 24-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. ",
      img:
        `${coming}`,
    },
    // {
    //   id: "3",
    //   icon: `${game}`,
    //   title: "TicTacToe",
    //   desc:
    //     "will add a short description",
    //  img:
    //     `${game}`,
    // },
    // {
    //   id: "4",
    //   icon: `${social}`,
    //   title: "TicTacToe",
    //   desc:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //  img:
    //     `${game}`,
    // },
  ];

  const handleClick= (direction) =>{
    // 
    direction === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3) 
    : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
  }
  return (
    <>
    <div className='works' id='works'>
      <header>
      <h1>Certifications</h1>
      </header>
    
      <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(item =>(
          
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {/* <span>Projects</span> */}
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
          ))
        }
      </div>
      <img src={arrow} className='arrow left' alt="" onClick={() =>handleClick('left')}/>
      <img src={arrow} className='arrow right' alt="" onClick={() =>handleClick()}/>
    </div>
        </>
  )
}
