import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  ${({ theme }) => theme.content.headerSpace};

  width: 100%;
  min-height: 100%;
  height: fit-content;
  gap: 24px;
  padding-bottom: 60px;
`;

export const Breadcrumbs = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 8px;
  background-color: #edc308;
  color: #ffffffff;
  width: fit-content;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  button {
    ${({ theme }) => theme.flex.center};
    aspect-ratio: 1/1;
    border-radius: 50%;
    padding: 2px;
    background-color: #fff;
  }
  span {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.row};
  align-items: flex-start;
  gap: 32px;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 24px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 13px));
  gap: 16px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, calc(25% - 12px));
    gap: 16px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, calc(33.3% - 11px));
    gap: 16px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, calc(50% - 6px));
    gap: 12px;
  }
  @media screen and (max-width: 340px) {
    grid-template-columns: 100%;
  }
`;

export const Actions = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  width: 100%;
`;

export const Filter = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  z-index: 1;
  .simple-input {
    flex-grow: 1;
  }
  .price-interval {
    width: 100%;
    max-width: 300px;
  }
  @media screen and (max-width: 767px) {
    .price-interval {
      max-width: 210px;
    }
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    .price-interval {
      max-width: 100%;
    }
  }
`;

export const NotFound = styled.div`
  ${({ theme }) => theme.flex.center};
  width: 100%;
  height: 400px;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  max-width: 600px;
  padding: 16px;
  margin: auto;
`;
