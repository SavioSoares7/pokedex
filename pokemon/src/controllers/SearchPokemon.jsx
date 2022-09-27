export class Pokemon {
  CreateBox(pokemon) {
    let pokemonMoves = pokemon.moves;

    let containerBox = document.querySelector("div#container-box");
    let containerInfo = document.querySelector("div#container-info");
    containerInfo.classList.add("box-pokemon");

    let containerMove = document.querySelector("div#container-move");
    let pokemonInfo = document.querySelector("div#pokemon-info");
    let pokemonId = document.querySelector("p#pokemon-id");
    let pokemonGender = document.querySelector("div#pokemon-gender");

    let img = document.createElement("img");
    let name = document.createElement("h1");
    let tag = document.createElement("div");

    img.src = `${pokemon.sprites.other.home.front_default}`;

    name.innerText = `${pokemon.species.name}`;
    pokemonId.innerText = `${pokemon.id}`;
    pokemonGender.innerText = "M";

    pokemonGender.addEventListener("click", () => {
      let genderPokemon = pokemonGender.innerHTML;
      let imgWoman = `${pokemon.sprites.other.home.front_female}`;
      console.log(imgWoman);
      console.log(genderPokemon);
      if (genderPokemon === "M") {
        pokemonGender.innerText = "F";
        pokemonGender.style.background = "#faf";

        img.src = `${pokemon.sprites.other.home.front_female}`;
      } else if (genderPokemon === "F") {
        pokemonGender.innerText = "M";
        pokemonGender.style.background = "#184c78";

        console.log(imgWoman == null);
        if (imgWoman == null) {
          img.src = `${pokemon.sprites.other.home.front_default}`;
        } else {
          img.src = `${pokemon.sprites.other.home.front_default}`;
        }
      }
    });

    containerInfo.appendChild(img);
    containerInfo.appendChild(name);
    pokemonMoves.forEach((element) => {
      let tag = document.createElement("div");

      tag.innerText = element.move.name;
      containerMove.appendChild(tag);
    });

    return containerBox;
  }
}
