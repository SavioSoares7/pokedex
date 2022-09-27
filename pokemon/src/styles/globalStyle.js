import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
  body{
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
  }
  a, li{
    list-style: none;
    text-decoration: none;
  }
  svg{
    cursor: pointer;
    font-size: 20px;
  }
  button{
    cursor: pointer;
    outline: none;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover {
    filter: brightness(0.9);
  }
`;
