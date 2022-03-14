import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PortfolioList from '../portfolioList.jsx/PortfolioList'
import './portfolio.scss'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, resumePortfolio } from '../../data.js'
// import Resume from '../../assets/Hisham.R.pdf'

export default function Portfolio() {
// to decide which project is selected
const [selected, setSelected]= useState('featured')
const [data, setData]= useState([])

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    // {
    //   id: 'web',
    //   title: 'Web App',
    // },
    // {
    //   id: 'mobile',
    //   title: 'Mobile App',
    // },
    // {
    //   design: 'design',
    //   title: 'Design',
    // },
    {
      id: 'resume',
      title: 'Resume',
    },
  ]
  useEffect(() => {
    switch(selected){
      case 'featured':
        setData(featuredPortfolio)
        break;
      case 'web':
        setData(webPortfolio)
        break;
      case 'mobile':
        setData(mobilePortfolio)
        break;
      case 'design':
        setData(designPortfolio)
        break;
      case 'resume':
        setData(resumePortfolio)
        break;
        default:
          setData(featuredPortfolio)
    }
    // when ever we change the selected then the data will change
  },[selected])

  // if (list.title === 'resume'){
  //   return <a href={Resume}></a>
  // }
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
       {list.map(item =>(
         <PortfolioList id={item.id} title={item.title} active={selected === item.id} 
         setSelected = {setSelected}
         />
       ))}
      </ul>
      <div className="container">
        {/* <div className="item">
          <img src="assets/tictactoe.png" alt="" />
          <h3>Tic Tac Toe</h3>
        </div> */}
       {data.map((stuff) =>(
         <div className="item">
         <img src={stuff.img} alt=""/>
         <a href={stuff.site} target='_blank' rel="noreferrer">{stuff.title}</a>
         {/* <h3 href={stuff.site}>{stuff.title} </h3> */}
         {/* <h2>Description</h2> */}

         </div>
       ))}
      </div>
    </div>
  )
}
