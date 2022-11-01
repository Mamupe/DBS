import React from 'react'

const DbzDetail = ({ character }) => {
  return (
    <>
      <h1>name: {character.name}</h1>
      <img src={character.imageUrl} alt={character.name} />
    </>
  )
}

export default DbzDetail