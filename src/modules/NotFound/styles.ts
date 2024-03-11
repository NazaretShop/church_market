import styled, { css } from "styled-components";

export const NotFoundContainer = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: auto;
  border: 1px solid #ffe70a;
  position: relative;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  height: fit-content;
  min-height: 300px;
  background: #e7e7e750;
  button {
    padding: 12px 16px;
  }
`;

export const Decoration = styled.img<{ orientation: "top" | "bottom" }>`
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
  max-width: 300px;
  height: auto;
`;
