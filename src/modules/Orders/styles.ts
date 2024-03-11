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

export const ContainerForm = styled.form`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.column};
  gap: 24px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.root};
  font-weight: 400;
  font-size: 24px;
  text-transform: none;
  display: block;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  height: fit-content;
  @media screen and (max-width: 1280px) {
    gap: 16px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Information = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 32px;

  flex: 1 1 auto;
  height: fit-content;
  margin-bottom: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    gap: 24px;
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  height: fit-content;
  width: 100%;
`;
