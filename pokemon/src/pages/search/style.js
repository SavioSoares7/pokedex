import styled from "styled-components";

export const Container = styled.div`
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
  > div#container-box {
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #bbb;
    width: 500px;
    min-height: 800px;

    > div.box-pokemon {
      display: flex;
      align-items: center;
      flex-direction: column;

      position: relative;

      width: 100%;
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
      > h1 {
        text-transform: capitalize;
      }
      > img {
        margin-top: 10px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
      > div.tag {
        width: 50px;
        height: 50px;
        background-color: red;
      }
      > div#pokemon-info {
        > #pokemon-id,
        #pokemon-gender {
          border: 1px solid #ccc;
          box-shadow: 0px 0px 5px #ccc;
          border-radius: 50%;
          padding: 15px;

          position: absolute;
        }
        > #pokemon-id {
          right: 0;
        }
        > #pokemon-gender {
          text-align: center;
          left: 0;
          cursor: pointer;
          background-color: #184c78;

          color: #fff;
        }
      }
    }
    > div#container-moves {
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      > div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        > div {
          width: 25%;
          text-transform: uppercase;
          background-color: ${({ theme }) => theme.COLORS.BG_BLACK};
          color: ${({ theme }) => theme.COLORS.BG_WHITE};
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 10px;
          padding: 14px;

          &:hover {
            opacity: 0.95;
          }
        }
      }
    }
  }
`;
