import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  gap: 0.2em;
`;

export const Input = styled.input`
  height: 18px;
  padding: 0.5em 0.8em;
  background-color: white;
  color: inherit;
  outline: none;
  border-radius: 8px;
  border: 0.5px #77037b solid;
`;

export const Button = styled.button`
  padding: 0.8em 0.2em;
  width: 100%;
  margin: 1.5em 0;
  background-color: #77037b;
  color: white;
  border-radius: 8px;
`;
