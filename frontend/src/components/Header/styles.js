import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  nav {
    min-width: 20%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      color: rgba(255, 255, 255, 1);
      text-decoration: underline;
    }
  }

  .logo {
    white-space: nowrap;
    font-size: 26px;
  }
`;