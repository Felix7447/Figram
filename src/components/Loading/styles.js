import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

export const Figure = styled.figure`
  min-height: 300px;
  height: ${(props) => props.height};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  svg {
    animation: ${rotate} infinite 2s linear;
  }
`;
