import styled, { css } from "styled-components";
import { IButtonVariant } from "./types";

export const Component = styled.button<IButtonVariant>`
  ${({ theme, variant }) =>
    variant === "filled"
      ? css`
          background-color: ${theme.colors.button};
          color: ${theme.colors.root};
        `
      : css`
          border: 1px solid ${theme.colors.buttonOutline};
          color: ${theme.colors.buttonOutline};
        `}
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1;
  height: auto;
  font-weight: 500;
  width: fit-content;
  transition: all 0.4s ease;

  &:active {
    transform: scale(0.98);
  }
`;
