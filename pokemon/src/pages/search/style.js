import styled from "styled-components";

export const Container = styled.div`
  > div.box-pokemon {
    background-color: #fff;
    box-shadow: 0px 0px 10px #bbb;
    width: 500px;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    > img {
      margin-top: 10px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }

  width: 1080px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
    > button {
      background-color: ${({ theme }) => theme.COLORS.BG_BLACK};
      color: ${({ theme }) => theme.COLORS.BG_WHITE};

      border-radius: 5px;
      padding: 20px;

      cursor: pointer;
    }
    > input {
      margin-right: 20px;
      margin-top: 30px;
      min-width: 720px;
      padding: 10px;
      border-radius: 20px;

      outline: none;
      border: none;

      box-shadow: 0px 0px 3px black;
    }
  }
`;
