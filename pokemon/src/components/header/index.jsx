import { Container, Menu } from "./style";

import { FiFilter, FiMenu } from "react-icons/fi";
import { CgPokemon } from "react-icons/cg";

const toggleMenu = function () {
  const menu = document.querySelector("ul#menu");
  menu.classList.toggle("active");
};

export function Header() {
  return (
    <Container>
      <FiFilter />
      <a href="#">
        Pokemon <CgPokemon />
      </a>

      <FiMenu onClick={toggleMenu} />
      <Menu>
        <ul id="menu" className="active">
          <li>
            <a href="#">Pokemons</a>
          </li>
          <li>
            <a href="#">Pokemons</a>
          </li>
          <li>
            <a href="#">Pokemons</a>
          </li>
          <li>
            <a href="#">Pokemons</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
