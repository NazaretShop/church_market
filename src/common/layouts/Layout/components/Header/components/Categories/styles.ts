import { IActiveble, IOpenable } from "@/common/types";
import styled, { css } from "styled-components";
import { IColorProps } from "./types";

export const Wrapper = styled.div<IOpenable>`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s;
  ${({ isOpen }) =>
    isOpen
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translate3d(0, 0, 0) translateY(100%);
        `
      : css`
          visibility: hidden;
          transform: translate3d(0, 0, 0) translateY(calc(100% - 12px));
          opacity: 0;
        `}
`;

export const Grid = styled.div<IColorProps>`
  border-radius: 0px 0 8px 8px;
  padding: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  height: fit-content;
  max-height: 412px;
  overflow: hidden;
  overflow-y: auto;
  transform: translate3d(0, 0, 0);
  transition: all 0.4s ease-in-out;

  border-style: solid;
  border-width: 0 1px 1px;
  ${({ isDarken }) =>
    isDarken
      ? css`
          background-color: rgba(10, 9, 7, 0.8);
          border-color: rgba(255, 255, 255, 0.15);
        `
      : css`
          background-color: #fff;
          box-shadow: 0px 0px 20px -20px #1919191b;
          border-color: #d8dadf;
        `}
`;

export const Item = styled.div<IColorProps & IActiveble>`
  ${({ theme }) => theme.flex.center};
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 16px;
  text-align: center;
  span {
    ${({ theme }) => theme.text.getLineClamp(3)}
  }
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      border: 1px solid #f290199a;
    }
  }

  ${({ isDarken }) =>
    isDarken
      ? css`
          border: 1px solid #ffffff34;
          background-color: rgba(10, 9, 7, 0.2);
          color: #ffffff;
          box-shadow: 0px 0px 20px -3px #19191914;
        `
      : css`
          color: #1d2939;
          border: 1px solid #ffffff;
          background-color: #e6e6e6ba;
          box-shadow: 0px 0px 20px -3px #19191914;
        `}
  ${({ isActive, isDarken }) =>
    isActive &&
    !isDarken &&
    css`
      border: 1px solid #f290199a;
      background-color: #fbff091f;
    `}
`;
