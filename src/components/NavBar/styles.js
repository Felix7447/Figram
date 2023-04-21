import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationBar = styled.nav`
  width: 100%;
  height: 4em;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px black solid;
`;

export const Anchor = styled(Link)`
  color: inherit;
  width: 100%;

  :hover {
    color: inherit;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
`;
