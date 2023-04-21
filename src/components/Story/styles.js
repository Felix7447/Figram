import styled from "styled-components";
import { Link } from "react-router-dom";

export const Anchor = styled(Link)`
  max-width: 105px;
  display: inline-block;
  color: inherit;
  text-align: center;
  margin: 0 0.5em;

  :hover {
    color: inherit;
  }

  img {
    border-radius: 50%;
    width: 94px;
    height: 94px;
    object-fit: cover;
    box-shadow: 0px 0px 8px 2px rgba(183, 9, 179, 0.64);
    -webkit-box-shadow: 0px 0px 8px 2px rgba(183, 9, 179, 0.64);
    -moz-box-shadow: 0px 0px 8px 2px rgba(183, 9, 179, 0.64);
  }
`;
