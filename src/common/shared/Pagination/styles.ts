import { IActiveble } from "@/common/types";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center}
  gap: 32px;
  @media screen and (max-width: 540px) {
    gap: 16px;
  }
`;

export const Range = styled(Wrapper)`
  gap: 24px;
  @media screen and (max-width: 540px) {
    gap: 20px;
  }
`;

export const ArrowButtonPrev = styled.button`
  ${({ theme }) => theme.flex.center}
  border-radius: 50%;
  position: relative;
  padding: 1px;
  transform: rotate(90deg);
  transition: all 0.4s ease-in-out;
  &:disabled {
    filter: opacity(0.1);
    cursor: default;
  }
  &:not([disabled]) {
    &:active {
      transform: scale(0.8) rotate(90deg);
    }
  }

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    padding: 9px;
  }
`;

export const ArrowButtonNext = styled(ArrowButtonPrev)`
  transform: rotate(270deg);
  &:not([disabled]) {
    &:active {
      transform: scale(0.8) rotate(270deg);
    }
  }
`;

export const ButtonPage = styled.button<IActiveble>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.root : theme.colors.regular};
  font-size: 16px;
  font-weight: 600;
`;
