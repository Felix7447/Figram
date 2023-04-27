import styled from "styled-components";

export const Div = styled.div`
  max-height: 40vh;
  overflow: hidden;
  position: relative;

  a {
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    bottom: 15%;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(to top, #f0f0f0, transparent);
  top: 0;
`;
