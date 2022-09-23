import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BG_BLACK};
  color: ${({ theme }) => theme.COLORS.BG_WHITE};

  border-radius: 5px;
  padding: 20px;

  cursor: pointer;
`;
