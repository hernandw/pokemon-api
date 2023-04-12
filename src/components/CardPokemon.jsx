import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardPokemon = ({pokemon}) => {

const navigate = useNavigate()

const vermas = ()=>{
    navigate(`pokemon/${pokemon.id}`)
}

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
<button onClick={vermas}>ver mas</button>
    </div>
  )
}

export default CardPokemon
