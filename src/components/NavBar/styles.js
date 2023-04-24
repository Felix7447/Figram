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
  height: 100%;
  position: relative;

  :hover {
    color: inherit;
  }

  &[aria-current] {
    &::after {
      position: absolute;
      content: "";
      width: 4px;
      height: 4px;
      background-color: rgba(27, 27, 27, 0.87);
      bottom: 0;
      top: 70%;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50%;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
`;
