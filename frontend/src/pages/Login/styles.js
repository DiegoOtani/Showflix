import styled from "styled-components";

export const LoginPageStyled = styled.section`
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const FormStyled = styled.form`
  padding: 20px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: 0px 6px 4px 6px rgba(0, 0, 0, 0.7);
  min-height: 500px;
`;

export const SubmitButtonStyled = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-weight: 100;
  cursor: pointer;
  border: 1px solid black;
`;