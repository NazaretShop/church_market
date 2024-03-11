import styled, { css } from "styled-components";
import { IProductButtonProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  height: 300px;
  width: 100%;
  background-color: #ffffffff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 20px -10px #19191965;
  cursor: pointer;

  &::before {
    content: "";
    transform-origin: center;
    height: 200%;
    width: 50%;
    aspect-ratio: 1 / 1;
    transition: opacity 0.4s ease-in;
    background: linear-gradient(
      90deg,
      transparent,
      #e7e7e7,
      #e7e7e7,
      #e7e7e7,
      #e7e7e7,
      transparent
    );
    animation: rotation 5000ms infinite linear;
    animation-play-state: paused;
    opacity: 0;
  }

  @keyframes rotation {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  @media (hover: hover) {
    &:hover {
      &::before {
        animation-play-state: running;
        opacity: 1;
      }
      img {
        transform: scale(1.1);
      }
    }
  }
  @media screen and (max-width: 540px) {
    height: 260px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column}
  position: absolute;
  inset: 3px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #f0f0f0ff;
`;

export const Panel = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  padding: 12px;
  background-color: #ffffff;

  min-height: 130px;
  gap: 8px;
  font-weight: 400;

  @media screen and (max-width: 540px) {
    padding: 8px;
    gap: 4px;
  }
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 12px;
  margin: auto;
`;

export const Title = styled.span`
  ${({ theme }) => theme.text.getLineClamp(2)};
  font-size: 14px;
  line-height: 1.4;
  text-transform: none;
  color: ${({ theme }) => theme.colors.root};
  width: 100%;
  margin: auto;
`;

export const Price = styled.span`
  ${({ theme }) => theme.text.getLineClamp(2)};
  font-weight: 600;
  font-size: 14px;
`;

export const Preview = styled.div`
  width: 100%;
  flex: 1 1 auto;
  padding: 16px;
  overflow: hidden;
  img {
    transition: all 0.4s ease-in-out;
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const Button = styled.button<IProductButtonProps>`
  width: 100%;
  height: 32px;
  font-weight: 400;
  border-radius: 6px;
  margin-top: auto;
  ${({ theme, isFilled }) =>
    isFilled
      ? css`
          background-color: ${theme.colors.button};
          color: ${theme.colors.root};
        `
      : css`
          border: 1px solid ${theme.colors.button};
          color: ${theme.colors.button};
        `}
`;
