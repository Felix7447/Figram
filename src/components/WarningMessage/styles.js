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
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4em;
  gap: 1em;

  svg {
    animation: ${grow} 3s linear infinite;
    align-self: center;
  }

  p {
    font-weight: 600;
    &:last-child {
      font-size: small;
    }
  }
`;
