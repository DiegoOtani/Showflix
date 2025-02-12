import styled from "styled-components";

export const LoginPageStyled = styled.section`
  background-image: url("https://bibliotecasecreta.home.blog/wp-content/uploads/2022/06/40-series-de-epoca.png");
  color: white;
  height: 100%;
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
`;

export const FormStyled = styled.form`
  padding: 20px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  min-height: 600px;
  z-index: 10;
`;

export const SubmitButtonStyled = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-weight: 100;
  cursor: pointer;
  border: 1px solid black;
`;

export const InputStyled = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorMessage = styled.span`
  color: white;
  background-color: rgba(255, 0, 0, 0.8);
  font-size: 14px;
  border-radius: 10px;
  padding: 10px 20px;
`;