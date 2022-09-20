import { Container } from "./style";

import { FiFilter, FiMenu } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <FiFilter />
      <h1>Pokemon</h1>
      <FiMenu />
    </Container>
  );
}
