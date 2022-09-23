import { Container, Menu } from "./style";

import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { CgPokemon } from "react-icons/cg";

const toggleMenu = function () {
  const menu = document.querySelector("ul#menu");
  menu.classList.toggle("active");
};

export function Header() {
  return (
    <Container>
      <a href="#">
        <AiOutlineSearch />
      </a>
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
