import styled from "styled-components";

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    margin-bottom: 30px;
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
