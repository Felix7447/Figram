import styled from "styled-components";

export const Favs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1.8em;
  padding: 0 1em;
  gap: 0.5em;
`;
