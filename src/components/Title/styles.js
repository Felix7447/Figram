import styled from "styled-components";

export const Header = styled.h1`
  margin-top: 1em;
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => props.size};
  padding: 0.2em 0.5em;
`;
