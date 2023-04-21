import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    filter: blur(3px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const Post = styled.div`
  margin-bottom: 1em;
  text-decoration: none;
  min-height: 360px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Img = styled.img`
  animation: ${fadeIn} 2s ease;
  min-height: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Span = styled.span`
  margin-left: 0.8em;
  font-weight: bold;
`;
