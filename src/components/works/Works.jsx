import React, { useState } from 'react'
import './works.scss'
import mobile from '../../assets/mobile.png'
import travel from '../../assets/travel.png'
import arrow from '../../assets/arrow.png'
import globe from '../../assets/globe.png'
import game from '../../assets/tictactoe.png'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

   const data = [
    {
      id: "1",
      icon: `${mobile}`,
      title: "Travel Blog",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        `${travel}`,
    },
    {
      id: "2",
      icon: `${globe}`,
      title: "OurSpace Social media app",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        `${travel}`,
    },
    {
      id: "3",
      icon: `${game}`,
      title: "TicTacToe",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
     img:
        `${game}`,
    },
    // {
    //   id: "4",
    //   icon: `${game}`,
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
    <div className='works' id='works'>
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
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={travel} alt="" />
            </div>
          </div>
        </div>
          ))
        }
      </div>
      <img src={arrow} className='arrow left' alt="" onClick={() =>handleClick('left')}/>
      <img src={arrow} className='arrow right' alt="" onClick={() =>handleClick()}/>
    </div>
  )
}
