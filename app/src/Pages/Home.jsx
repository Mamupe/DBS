import React from 'react'
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className='homeContainer'>
    
    <img className="cabecera" src={"https://res.cloudinary.com/dghnwllrc/image/upload/v1667222604/Dragon_Ball_Super_ensdta.png"} alt={"dragon ball image"}/>
    <h2>Dragon ball Super miniproject</h2>
    <button type="button" clasName="btnToFinder"><Link to ="finder">Go to Finder</Link></button>
    
    </div>
  )
}

export default Home