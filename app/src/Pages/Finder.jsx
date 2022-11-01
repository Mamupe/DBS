import React from 'react'
import { CodeFetchingInput } from "../Components/CodeFetchingInput";
import { Link } from 'react-router-dom';
import "./Finder.css"

const Finder = () => {
  return (
    <div className="findeContainer">
      <CodeFetchingInput/>
      <Link to={`/form`}><button type="button" clasName="btnToForm">Añade un nuevo personaje</button></Link>
    </div>
  )
}

export default Finder