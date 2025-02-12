import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
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

export const TextArea = styled.textarea`
  padding: 10px 10px;
  width: 100%;
  display: flex;
  gap: 10px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const InputSection = styled.section`
  width: 100%;
  display: flex;
  gap: 60px;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RatingInput = styled.input`
  padding: 10px 10px;
  width: 100%;
  display: flex;
  gap: 10px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const SubmitButtonStyled = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-weight: 100;
  cursor: pointer;
  border: 1px solid black;
`;

export const GenresDiv = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const FieldsetStyled = styled.fieldset`
  border: 2px solid #ccc;
  padding: 40px 30px;
  
  width: 100%;
`;

export const LegendStyled = styled.legend`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const GenreLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const GenreCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const ErrorMessage = styled.span`
  text-align: center;
  color: white;
  background-color: rgba(255, 0, 0, 0.8);
  font-size: 14px;
  border-radius: 10px;
  padding: 10px 20px;
`;