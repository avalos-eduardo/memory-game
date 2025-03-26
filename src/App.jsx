import { useEffect, useState } from "react";
import { getPokemon } from "./pokeAPI";
import Card from "./components/Card";
import CardsDisplay from "./components/CardsDisplay";
import Header from "./components/Header";
import Scorekeeper from "./components/Scorekeeper";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Scorekeeper.css";

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokeData = await getPokemon();
      setPokemon(pokeData);
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Header title="Pokémon Memory Game" />
      <Scorekeeper />
      <CardsDisplay>
        {pokemon.map((poke) => (
          <Card pokeImg={poke.image} pokeName={poke.name} />
        ))}
      </CardsDisplay>
    </>
  );
}
