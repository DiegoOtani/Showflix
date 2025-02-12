import styled from "styled-components";

export const MovieInfoStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4px;

  & span {
    display: flex;
    gap: 4px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rating {
    background-color: #FC5056;
    border-radius: 20%;
    color: white;
    font-weight: 700;
    
  }
`;