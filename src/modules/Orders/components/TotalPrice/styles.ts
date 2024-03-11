import styled, { css } from "styled-components";
import { IDecorationProps } from "./types";

export const Sticky = styled.div`
  position: sticky;
  top: 45px;
  left: 0;
  min-width: 360px;
  width: 100%;
  max-width: 360px;

  height: fit-content;
  @media screen and (max-width: 1280px) {
    min-width: 320px;
    width: 100%;
    max-width: 320px;
  }
  @media screen and (max-width: 1024px) {
    position: relative;
    top: 0;
    min-width: 100%;
    margin-top: 32px;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #eeeeee31;
  padding: 50px 16px 80px 16px;
  position: relative;
  border: 1px solid #ffe70a;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.08);
  button {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const Decoration = styled.img<IDecorationProps>`
  ${({ orientation }) => `${orientation}: 0;`}
  ${({ orientation }) =>
    orientation === "top"
      ? css`
          transform: translate(-50%, calc(-50% - 8px));
        `
      : css`
          transform: translate(-50%, calc(50% + 8px)) rotate(180deg);
        `}
  position: absolute;
  left: 50%;
  width: calc(100% - 8px);
  height: auto;
  @media screen and (max-width: 1024px) {
    max-width: 300px;
  }
`;

export const Line = styled.hr`
  border: 1px ${({ theme }) => theme.colors.button} solid;
  margin: 24px 0 12px 0;
  outline: none;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
`;

export const Row = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  * {
    font-size: 16px;
    line-height: 1.4;
    font-weight: 400;
  }
  b {
    font-weight: 600;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
  }
`;
