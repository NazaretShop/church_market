import { IError } from "@/common/types/general";
import styled, { css } from "styled-components";
import { IInputComponentProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  min-height: 87px;
  position: relative;
`;

export const Component = styled.input<IInputComponentProps>`
  color: #1d2939;
  ${({ theme, isError }) =>
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
  padding: ${({ haveEndIcon }) =>
    haveEndIcon ? `12px 48px 12px 16px` : `12px 16px;`};

  &::placeholder {
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
  margin-bottom: 4px;
`;

export const Message = styled.span<IError>`
  color: ${({ error }) => (error ? "#D92D20" : "#98A2B3")};
  font-size: 10px;
  margin-top: 2px;
  font-weight: 400;
  text-align: right;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
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
