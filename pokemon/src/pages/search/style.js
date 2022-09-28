import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  width: 1080px;
  margin: 0 auto;

  > input {
    text-transform: lowercase;
    margin: 20px 10px 60px;

    border-radius: 20px;
    width: 70%;
    height: 30px;
    padding: 20px;

    box-shadow: 0px 0px 2px black;
  }

  > button {
    padding: 10px;

    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BG_BLACK};
    color: ${({ theme }) => theme.COLORS.BG_WHITE};
  }
`;
