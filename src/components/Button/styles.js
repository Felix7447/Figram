import styled from "styled-components";

export const ButtonStyles = styled.button`
  padding: 0.8em 0.2em;
  width: ${(props) => props.width || "100%"};
  margin: 1.5em 0;
  background-color: #77037b;
  color: white;
  border-radius: 8px;
`;
