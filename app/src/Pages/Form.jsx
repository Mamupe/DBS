import React from 'react'
import "./Form.css"
import { Customch } from "../Components/Create";
const Form = () => {
  return ( <><Customch/></>
    
       /* <div className='formContainer'>
      <form onSubmit={(ev) => createPersonaje(ev)}>
        <fieldset>
          <legend>Crea tu personaje</legend>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(ev) => setName(ev.target.value)}
          />
          <label htmlFor="img">Imagen:</label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={(ev) => setImg(ev.target.value)}
          />
         
        </fieldset>
        <input type="submit" value="Create" />
      </form>
     
    
    </div> */
  )
}

export default Form