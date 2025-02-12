import styled from "styled-components";

export const CardStyled = styled.div`
  height: 100%;
  min-width: 250px;
  max-width: 20vw;
  max-height: 60vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  ${(props) => (
    !props.selected && `
      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.6);
      }
    `
  )}

  img {
    height: 40vh;
    width: 100%;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }
`;