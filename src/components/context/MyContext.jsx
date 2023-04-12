import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);

  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const getAllPokemon = async () => {
    const res = await fetch(urlBase);
    const data = await res.json();
    

    const promises = data.results.map(async (poke) => {
      const res = await fetch(poke.url);
      const data = res.json();
      return data;
    });

    const result = await Promise.all(promises);
    setDataPokemon(result);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <MyContext.Provider value={{ dataPokemon }}>{children}</MyContext.Provider>
  );
};
