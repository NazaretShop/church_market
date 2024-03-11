import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 32px;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 13px));
  gap: 16px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, calc(25% - 12px));
    gap: 16px;
    div {
      &:nth-child(10),
      &:nth-child(9) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, calc(33.3% - 11px));
    gap: 16px;
    div {
      &:nth-child(8),
      &:nth-child(7) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, calc(50% - 6px));
    gap: 12px;
    div {
      &:nth-child(5),
      &:nth-child(6) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 340px) {
    grid-template-columns: 100%;
    div {
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;
