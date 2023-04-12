import React, { useContext } from "react";
import { MyContext } from "../components/context/MyContext";
import CardPokemon from "../components/CardPokemon";

const HomePage = () => {
  const { dataPokemon } = useContext(MyContext);

  return (
    <div>
      <h1>Lista de Pokemones</h1>

{dataPokemon.map((pokemon)=> (<CardPokemon key={pokemon.id} pokemon={pokemon} />))}

    </div>
  );
};

export default HomePage;
