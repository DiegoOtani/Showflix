import styled from "styled-components";

export const InputFieldStyled = styled.div`
  padding: 0px 10px;
  width: 80%;
  display: flex;
  gap: 10px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 10px;

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
  }
`;

export const SearchButton = styled.button`
  border: none; 
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;