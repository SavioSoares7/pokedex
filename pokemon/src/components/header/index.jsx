import { Container, Menu } from "./style";

import { FiFilter, FiMenu } from "react-icons/fi";
import { CgPokemon } from "react-icons/cg";

export function Header() {
  return (
    <Container>
      <FiFilter />
      <a href="#">
        Pokemon <CgPokemon />
      </a>

      <FiMenu />
      <Menu>
        <ul>
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
