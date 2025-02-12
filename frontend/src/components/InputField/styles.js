import styled from "styled-components";

export const InputFieldStyled = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;

  input {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    border: 2px solid #ccc;
    background-color: #ffffff;
  }
`;

export const SearchButton = styled.button`
  border: none; 
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
  }
`;