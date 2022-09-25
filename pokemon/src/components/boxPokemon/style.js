import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;

  box-shadow: 0px 0px 10px #bbb;

  width: 400px;
  height: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 50px;

  > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;
