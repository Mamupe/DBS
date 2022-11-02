import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DbzDetail from './DbzDetail';
import "./CompGallery.css";
import axios from "axios";


    export const CompGallery = () => {
        const [characterList, setCharacterList] = useState([]);
        useEffect(() => {
            (async () => {
              let data = await fetch ("http://localhost:8080/characters").then(
                (res) => res.json()
              );
        
              setCharacterList(data);
            })();
          }, []);

          const deleteCharacter = async (id) => {
            await axios({
              
              method: "delete",
              url: `http://localhost:8080/characters/${id}`,
            });
        
            const newList = characterList.filter((character) => character.id != id);
            setCharacterList(newList);
          };

  return (
    <>
      
      
        {characterList.map((character) => (
          <div className="divCompGallery" key={character.id}>
           
            <Link to={`/detail/${character.id}`}>
            <img className="imgGallery" src={character.imageUrl} alt={character.name} />
            </Link>
            <h3>{character.name}</h3>
            <button type='button' className='borrar' onClick={()=> deleteCharacter(character.id)}>Borrar</button>
            
          </div>
        ))}
      
    </>



  )
         }
  


export default CompGallery



/* (

       
    {characterList.map((character) =>
       <div>
       <img src={character.imageUrl} alt={character.name}></img>
       <h2>Name: {character.name}</h2>

       </div> )}
       
) */