import { Container } from "./style";
import { useState, useEffect } from "react";

import { Header } from "../../components/header";

export function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    function PokeApi() {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

      fetch(URL)
        .then((date) => {
          return date.json();
        })
        .then((date) => {
          setPokemons(pokemons.push(date));
        });
    }
    PokeApi();
  }, []);

  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
}
