import React from 'react'
import "./Detail.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {



  const [character, setCharacter] = useState({});

  const params = useParams();
 
  const { id } = params;

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetch(`http://localhost:8080/characters/${id}`);
      const res = await data.json();
      setCharacter(res);
    };

    getCharacter();
  }, []);

  return (
    <div className="character">
      {character ? (
        <figure className="cardDiv">
          <h3 className='encabezado'>{character.name}</h3>
          <img className='cardDetail' src={character.imageUrl} alt={character.name} />
          <h4 className='caract'>Especie: {character.specie}  ||  Estatus: {character.status} </h4>
          
          <h4 className='caract'>Universo: {character.universe}  ||  Planeta: {character.originplanet}</h4>
         
        </figure>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};




export default Detail