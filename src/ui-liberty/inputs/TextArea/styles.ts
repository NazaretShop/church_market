import styled, { css } from "styled-components";
import { ITextAreaProps, IWrapperProps } from "./types";

export const Wrapper = styled.div<IWrapperProps>`
  ${({ theme }) => theme.flex.column};
  min-height: ${({ customHeight, unValidate }) =>
    customHeight ? `${customHeight + (unValidate ? 0 : 52)}px` : "87px"};
  position: relative;
`;

export const Component = styled.textarea<ITextAreaProps>`
  height: ${({ customHeight }) =>
    customHeight ? `${customHeight}px` : "auto"};
  color: #1d2939;

  ${({ theme, error }) =>
    error
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

  resize: none;
  border-radius: 8px;
  transition: 0.2s ease;
  min-height: 44px;
  background: #fff;
  outline: none;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
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

export const Icon = styled.button`
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  height: 100%;
  aspect-ratio: 1 / 1;
  right: 0;
  transform: translate(-4px, -50%);
  svg {
    path {
      width: 20px;
      height: 20px;
    }
  }
`;
