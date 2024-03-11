import { IActiveble, IOpenable } from "@/common/types";
import styled, { css } from "styled-components";
import { IDarkenProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 12px;

  @media screen and (max-width: 767px) {
    .title {
      display: none;
    }
  }
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Burger = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 12px;
  cursor: pointer;
`;

export const Button = styled.button<IOpenable>`
  width: 24px;
  height: 18px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s;
  span {
    background: ${({ theme }) => theme.colors.button};
    width: 100%;
    height: 2px;
    border-radius: 100px;
    transition: 0.3s ease;
    :nth-child(3) {
      width: 60%;
    }
  }
  @media screen and (max-width: 767px) {
    ${({ isOpen }) =>
      isOpen &&
      css`
        span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          width: 100%;
        }

        span:nth-child(2) {
          transform: translateX(-20px);
          opacity: 0;
        }
      `}
  }
`;

export const Menu = styled.div<IOpenable & IDarkenProps>`
  background: ${({ theme, isDarken }) =>
    isDarken ? "rgba(10, 9, 7, 0.7)" : theme.colors.header};
  display: none;
  position: absolute;
  top: 64px;
  left: 0;
  z-index: 120;
  height: calc(100svh - 64px);
  width: 100%;
  transition: all 0.4s ease;
  @media screen and (max-width: 767px) {
    display: block;
    transform: translateX(-100%);
    ${({ isOpen }) => isOpen && "transform: translateX(0);"}
  }
  @media screen and (max-width: 540px) {
    top: 60px;
    height: calc(100svh - 60px);
    transform: translateY(calc(100% + 120px));
    ${({ isOpen }) => isOpen && "transform: translateY(0);"}
  }
  @media screen and (min-width: 541px) {
    max-width: 400px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 16px 0 32px 0;
  ${({ theme }) => theme.flex.between};
  flex-direction: column;
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const Item = styled.div<IDarkenProps & IActiveble>`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid
    ${({ isDarken }) => (isDarken ? "#e1e1e118" : "#28282818")};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme, isDarken }) =>
    isDarken ? theme.colors.header : theme.colors.root};
  ${({ isActive, isDarken }) =>
    isActive &&
    !isDarken &&
    css`
      background-color: #5050501f;
    `}
`;
