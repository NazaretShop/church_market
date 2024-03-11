import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  @media screen and (max-width: 540px) {
    grid-template-columns: 100%;
    row-gap: 0px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  @media screen and (max-width: 540px) {
    grid-template-columns: 100%;
    row-gap: 0px;
  }
`;

export const Line = styled.hr`
  border: 1px ${({ theme }) => theme.colors.button} solid;
  margin: 6px 0 12px 0;
  outline: none;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  height: fit-content;
  gap: 32px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.05),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.05);
  padding: 24px;
  @media screen and (max-width: 540px) {
    padding: 16px;
    gap: 24px;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.root};
  font-weight: 400;
  font-size: 18px;
  text-transform: none;
  display: block;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  width: 100%;
`;
