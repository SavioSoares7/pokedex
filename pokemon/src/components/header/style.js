import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;

  height: 66px;

  border-radius: 0px 0px 20px 20px;
  background: ${({ theme }) => theme.COLORS.BG_WHITE};
  box-shadow: 0px 0px 5px #ccc;

  > a {
    color: ${({ theme }) => theme.COLORS.BG_BLACK};
    font-size: 30px;
    font-weight: bold;
  }
`;
export const Menu = styled.nav`
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 999;
  margin-top: 66px;

  ul {
    background-color: #027554;
    border-radius: 20px 0 0 20px;
  }

  li {
    padding: 30px 130px;
    border-bottom: 1px solid #fff;

    &:last-child {
      border-bottom: 0px;
    }
  }
  a {
    color: #fff;
    padding: 5px 0px;
    position: relative;

    &::after,
    &::before {
      content: "";

      display: block;
      border-bottom: 1px solid #fff;
      width: 0%;
      transition: all 500ms;
    }
    &::before {
      content: "";
      position: absolute;
      right: 0;
    }
    &:hover::after,
    &:hover::before {
      width: 100%;
    }
  }
`;
