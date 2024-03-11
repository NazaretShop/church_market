import styled, { css } from "styled-components";
import { IHeaderWrapperProps } from "./types";

export const Wrapper = styled.header<IHeaderWrapperProps>`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1440px) {
    height: 72px;
  }
  @media screen and (max-width: 1024px) {
    height: 64px;
  }
  @media screen and (max-width: 540px) {
    height: 60px;
  }
  transform: translateY(${({ visible }) => (visible ? 0 : -100)}%);
  will-change: transform;
  ${({ isDarken }) =>
    isDarken
      ? css`
          background-color: rgba(10, 9, 7, 0.58);
          border-color: rgba(255, 255, 255, 0.15);
          * {
            color: ${({ theme }) => theme.colors.header};
          }
        `
      : css`
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(255, 216, 216, 1);
          box-shadow: 0px 0px 38px -22px rgba(0, 0, 0, 0.75);
          * {
            color: ${({ theme }) => theme.colors.root};
          }
        `};
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.between};
  width: 100%;
  height: 100%;
  position: relative;
  gap: 16px;
`;

export const Category = styled.button`
  ${({ theme }) => theme.flex.center};
  gap: 12px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    span {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
`;

export const LogoBtn = styled.button`
  height: calc(100% - 20px);
  margin: 0 auto;
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 767px) {
    position: relative;
    transform: translate(0, 0);
    left: 0;
    top: 0;
    margin: 0 auto 0 0;
  }
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  justify-content: flex-end;
  gap: 24px;
  @media screen and (max-width: 540px) {
    gap: 16px;
  }
`;

export const Calls = styled.a`
  ${({ theme }) => theme.flex.row};
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 540px) {
    span {
      display: none;
    }
  }
`;

export const BasketBtn = styled.button`
  position: relative;
`;

export const Label = styled.div`
  ${({ theme }) => theme.flex.center}
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 30%);
  background-color: #f82a2a;
  color: #fff;
  font-size: 10px;
  width: 20px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;
