import { Container } from "./style";

import { Header } from "../../components/header";

import { Pokemon } from "../../controllers/SearchPokemon";
const pokemon = new Pokemon();

export function Search() {
  function searchPokemon() {
    let search = document.querySelector("input#pokemon").value;
    let URL = `https://pokeapi.co/api/v2/pokemon/${search}`;

    if (!search) {
      alert("Por favor preencha o campos");
      return;
    }

    fetch(URL)
      .then((date) => {
        return date.json();
      })
      .then((date) => {
        pokemon.CreateBox(date);
        console.log(date);
      })
      .catch((e) => {
        console.log("Pokemon não encontrado");
      });
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <input type="text" id="pokemon" />
          <button onClick={searchPokemon}>Pesquisar</button>
        </div>

        <div id="container-box">
          <div id="container-info">
            <div id="pokemon-info">
              <p id="pokemon-id"></p>
              <div id="pokemon-gender"></div>
            </div>
          </div>
          <div id="container-moves">
            <div id="container-move"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
