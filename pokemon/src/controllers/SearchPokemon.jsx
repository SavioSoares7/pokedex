export class Pokemon {
  CreateBox(pokemon) {
    let pokemonMoves = pokemon.moves;

    let containerBox = document.querySelector("div#container-box");
    let containerInfo = document.querySelector("div#container-info");
    containerInfo.classList.add("box-pokemon");

    let containerMove = document.querySelector("div#container-move");
    let pokemonInfo = document.querySelector("div#pokemon-info");

    let img = document.createElement("img");
    let name = document.createElement("h1");
    let tag = document.createElement("div");

    img.src = `${pokemon.sprites.other.home.front_default}`;

    name.innerText = `${pokemon.species.name}`;

    containerInfo.appendChild(img);
    containerInfo.appendChild(name);
    pokemonMoves.forEach((element) => {
      let tag = document.createElement("div");

      tag.innerText = element.move.name;
      containerMove.appendChild(tag);
    });

    console.log(pokemon.id);

    return containerBox;
  }
}
