import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
  box-shadow: 0px 0px 10px 5px #ccc;
  border-radius: 10px;
  min-height: 500px;
  margin: 0 auto;
`;
