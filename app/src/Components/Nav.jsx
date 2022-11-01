import React from 'react'
import { NavLink } from "react-router-dom"
import "./Nav.css"
const Nav = () => {
  return (
    <nav className="nav">
    <div className="divhome">
    <NavLink to ="">Home</NavLink>
    </div>
    
    <div className="divgallery">
    <NavLink to ="gallery">Gallery</NavLink>
    </div>
    
    </nav>
  )
}

export default Nav;