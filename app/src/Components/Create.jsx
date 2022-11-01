import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

export const Customch = () => {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [personajes, setPersonajes] = useState ([]);

    useEffect(() => {
        const getPersonajes = async () => {
            const data = await fetch("http://localhost:8080/characters");
            const res = await data.json();
            setPersonajes(res);
        }
        getPersonajes();
    }, []);

    const createPersonaje = (ev) => {
        ev.preventDefault();
    
        const personaje = {
            name: name,
            imageUrl: img,
            
        };
        postPersonaje(personaje);
    }; 

    const postPersonaje = async (item) => {
        axios({
            method: "post",
            url: "http://localhost:8080/characters",
            data: item,
        });
    };
    
    return (
    
        <div className='formContainer'>
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
         <input type="submit" value="Crear" className="crear" />
       </form>
      
     
     </div>
   )
};