import styled from "styled-components";
import { ISimpleInputComponentProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  box-shadow: 0px 0px 20px -5px #1919191b;
`;

export const Component = styled.input<ISimpleInputComponentProps>`
  color: #1d2939;
  border: 1px solid #d8dadf;
  &:focus {
    border: 1px solid #d0d5dd;
  }
  &::placeholder {
    color: #98a2b3;
  }
  &:disabled {
    color: #d0d5dd;
    border: 1px solid #d0d5dd;
  }

  padding: 12px 16px;
  border-radius: 6px;
  transition: 0.2s ease;
  height: 40px;
  background-color: #ffffffff;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
