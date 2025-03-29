import { useEffect, useState } from "react";
import { getPokemon } from "./pokeAPI";
import Card from "./components/Card";
import CardsDisplay from "./components/CardsDisplay";
import Header from "./components/Header";
import Scorekeeper from "./components/Scorekeeper";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Scorekeeper.css";
import "./styles/Card.css";
import "./styles/CardsDisplay.css";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] =
    useState(`Welcome to the Pokémon Memory Game! Try not to click on the same Pokémon
        more than once!`);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokeData = await getPokemon();
      setPokemon(pokeData);
    };

    fetchPokemon();
  }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (id) => {
    if (clickedPokemon.includes(id)) {
      setHighScore((prev) => Math.max(prev, score));
      setScore(0);
      setClickedPokemon([]);
      setMessage(`Welcome to the Pokémon Memory Game! Try not to click on the same Pokémon
        more than once!`);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedPokemon([...clickedPokemon, id]);

      setHighScore((prev) => Math.max(prev, newScore));

      if (newScore === pokemon.length) {
        setMessage("You win, you have caught them all!");
      } else {
        setMessage("Correct!");
      }

      if (score === 0) {
        setMessage(`Welcome to the Pokémon Memory Game! Try not to click on the same Pokémon
          more than once!`);
      }
    }

    setPokemon((prev) => shuffleArray(prev));
  };

  return (
    <>
      <Header title="Pokémon Memory Game" />
      <Scorekeeper score={score} highScore={highScore} />
      <CardsDisplay message={message}>
        {pokemon.map((poke) => (
          <Card
            key={poke.id}
            pokeImg={poke.image}
            pokeName={poke.name}
            onClick={() => handleCardClick(poke.id)}
          />
        ))}
      </CardsDisplay>
    </>
  );
}
