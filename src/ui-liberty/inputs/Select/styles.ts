import { IOpenable } from "@/common/types";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  gap: 4px;
  min-height: 87px;
`;
export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const Label = styled.label`
  color: #475467;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;

export const Message = styled.span`
  color: #d92d20;
  font-size: 10px;
  margin-top: -2px;
  font-weight: 400;
  text-align: right;
`;

export const Input = styled.input<{ isError: boolean }>`
  color: #1d2939;
  font-weight: 500;
  ${({ isError }) =>
    isError
      ? css`
          border: 1px solid #d92d20;
        `
      : css`
          border: 1px solid #eaecf0;
          &:focus {
            border: 1px solid #d0d5dd;
          }
        `};

  &::placeholder {
    font-weight: 400;
    color: #98a2b3;
  }
  &:disabled {
    color: #d0d5dd;
    border: 1px solid #d0d5dd;
  }

  border-radius: 8px;
  transition: 0.2s ease;
  height: 44px;
  background: #fff;
  outline: none;
  padding: 12px 48px 12px 16px;
  font-size: 14px;
  line-height: 150%;
  width: 100%;
`;

export const IndicatorImage = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  padding: 4px;
  img {
    object-fit: contain;
    width: 100%;
    transition: all 0.3s ease;
    height: 100%;
    ${({ isOpen }) => isOpen && "transform: rotateX(180deg)"}
  }
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  min-height: 44px;
  padding: 10px 16px;
  gap: 10px;
  cursor: pointer;
  color: #1d2939;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  @media (hover: hover) {
    transition: all 0.4s ease;
    &:hover {
      background-color: #f2f4f7;
    }
  }
`;

export const List = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.column};
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.08);
  border: 1px solid #eaecf0;
  ${({ isOpen }) =>
    !isOpen
      ? css`
          opacity: 0;
          transform: translateY(calc(100% - 18px));
          visibility: hidden;
          pointer-events: none;
        `
      : css`
          transform: translateY(calc(100% - 12px));
        `}

  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  border-radius: 8px;
  background: #fff;
  max-height: 220px;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.2s ease-out;
`;

export const NotFound = styled.div`
  color: #98a2b3;
  ${({ theme }) => theme.flex.center};

  height: 100px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;
