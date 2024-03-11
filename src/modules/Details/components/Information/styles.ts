import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  height: 100%;
  flex: 1 1 auto;
  gap: 16px;
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 16px;
  height: fit-content;
  max-height: 440px;
  @media screen and (max-width: 767px) {
    max-height: fit-content;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.text.getLineClamp(5)}
  color: ${({ theme }) => theme.colors.root};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.4;
  @media screen and (max-width: 1280px) {
    font-size: 24px;
  }
`;

export const Item = styled.div`
  ${({ theme }) => theme.flex.between};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.regular};
  gap: 8px;
  width: 100%;
  padding: 18px 0;
  * {
    font-size: 16px;
    line-height: 1.4;
  }

  @media screen and (max-width: 1280px) {
    padding: 10px 0;
  }
  @media screen and (max-width: 767px) {
    * {
      font-size: 14px;
    }
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.column};
  flex-grow: 1;
  overflow: hidden;
  overflow-y: auto;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #cbcbcbb4;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4f4f4f67;
    border-radius: 4px;
  }
`;

export const Category = styled.div`
  padding: 10px 0 0;
`;

export const BasketAction = styled.div`
  ${({ theme }) => theme.flex.row};
  margin-bottom: 16px;
  height: 44px;
  gap: 16px;
  button {
    height: 100%;
    padding: 14px 28px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0;
  }
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.colors.root};
  font-weight: 900;
  font-size: 24px;
  line-height: 1.4;
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
`;
