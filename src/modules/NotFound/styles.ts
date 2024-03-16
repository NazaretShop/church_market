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

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.row};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: fit-content;
  min-height: 100svh;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  padding: 115px 16px 60px 16px;
  @media screen and (max-width: 540px) {
    font-size: 24px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  line-height: 1;
`;
