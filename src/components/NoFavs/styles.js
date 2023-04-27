import styled, { keyframes } from "styled-components";

const grow = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`;

export const Div = styled.div`
  padding: 0 2em;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-top: 1em;
    animation: ${grow} 3s linear infinite;
  }
`;

export const Message = styled.p`
  margin: 0.5em 0;
`;
