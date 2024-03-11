import { IOpenable } from "@/common/types";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Video = styled.video<IOpenable>`
  width: 100%;
  height: calc(100% - 60px);
  background-color: #000;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      @media screen and (max-width: 767px) {
        max-height: 360px;
      }
    `}
`;

export const Controls = styled.div`
  ${({ theme }) => theme.flex.row};
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.4s ease-in;
  gap: 12px;
  width: 100%;
  z-index: 3;
  padding: 12px 0;
`;

export const Button = styled.button`
  ${({ theme }) => theme.flex.center};
  padding: 4px;
  aspect-ratio: 1 / 1;
`;

export const Range = styled.input`
  max-width: 80px;
`;

export const SideControls = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 12px;
  margin-left: auto;
`;
