import { Container } from "./style";

import { Header } from "../../components/header";
import { BoxPokemon } from "../../components/boxPokemon";

export function Search() {
  function pokeApi() {
    let input = document.querySelector("input#searchPokemon").value;

    let API = `https://pokeapi.co/api/v2/pokemon/${input}`;

    fetch(API)
      .then((date) => {
        return date.json();
      })
      .then((date) => {
        createPokemon(date);
      })
      .catch(() => {
        console.log("Pokemon não encontrado");
      });
  }
  function createPokemon(date) {}
  return (
    <>
      <Header />
      <Container>
        <input type="text" id="searchPokemon" />
        <button onClick={pokeApi}>Pesquisar</button>
      </Container>
      <div id="container-Pokemon"></div>
    </>
  );
}
