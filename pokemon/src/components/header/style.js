import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 66px;

  border-radius: 0px 0px 20px 20px;
  background: ${({ theme }) => theme.COLORS.BG_WHITE};
  box-shadow: 0px 0px 5px #ccc;
`;
