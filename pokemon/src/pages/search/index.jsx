import { Container } from "./style";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { BoxPokemon } from "../../components/boxPokemon";

export function Search() {
  let URL = `https://pokeapi.co/api/v2/pokemon/ditto`;

  fetch(URL)
    .then((date) => {
      return date.json();
    })
    .then((pokemon) => {
      console.log(pokemon);
    });

  return (
    <>
      <Header />
      <Container>
        <div>
          <input type="text" />
          <Button />
        </div>

        <BoxPokemon></BoxPokemon>
      </Container>
    </>
  );
}
