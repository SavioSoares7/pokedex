import { Container } from "./style";

import { Header } from "../../components/header";

export function Search() {
  function createBox(pokemon) {
    let containerBox = document.querySelector("div#container-box");

    containerBox.classList.add("box-pokemon");

    let img = document.createElement("img");
    img.src = `${pokemon.sprites.front_default}`;

    containerBox.appendChild(img);
    return containerBox;
  }

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
        createBox(date);
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

        <div id="container-box"></div>
      </Container>
    </>
  );
}
