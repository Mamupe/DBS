import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Customch = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  const [universe, setUniverse] = useState('');
  const [originplanet, setOriginplanet] = useState('');
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getPersonajes = async () => {
      const data = await fetch('http://localhost:8080/characters');
      const res = await data.json();
      setPersonajes(res);
    };
    getPersonajes();
  }, []);

  const createPersonaje = (ev) => {
    ev.preventDefault();

    const personaje = {
      name: name,
      imageUrl: img,
      specie: specie,
      status: status,
      universe: universe,
      originplanet: originplanet,
    };
    postPersonaje(personaje);
  };

  const postPersonaje = async (item) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/characters',
      data: item,
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={(ev) => createPersonaje(ev)}>
        <legend>Crea tu personaje</legend>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(ev) => setName(ev.target.value)}
        />
        <label htmlFor="specie">Especie:</label>
        <input
          type="text"
          name="specie"
          id="specie"
          onChange={(ev) => setSpecie(ev.target.value)}
        />
        <label htmlFor="status">Estatus:</label>
        <input
          type="text"
          name="status"
          id="status"
          onChange={(ev) => setStatus(ev.target.value)}
        />
        <label htmlFor="universe">Universo:</label>
        <input
          type="text"
          name="universe"
          id="universe"
          onChange={(ev) => setUniverse(ev.target.value)}
        />
        <label htmlFor="originplanet">Planeta:</label>
        <input
          type="text"
          name="originplanet"
          id="originplanet"
          onChange={(ev) => setOriginplanet(ev.target.value)}
        />
        <label htmlFor="img">Imagen:</label>
        <input
          type="text"
          name="img"
          id="img"
          onChange={(ev) => setImg(ev.target.value)}
        />

        <input type="submit" value="Crear" className="crear" />
      </form>
    </div>
  );
};
