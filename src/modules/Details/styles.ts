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

export const Description = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.root};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const TextLoader = styled(Text)`
  ${({ theme }) => theme.animation.shine};
  background-color: #f0f0f0ff;
  height: 300px;
`;

export const InformationLoader = styled.div`
  ${({ theme }) => theme.animation.shine};
  width: 100%;
  background-color: #f0f0f0ff;
  height: 360px;
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

export const TitleLoader = styled(Title)`
  ${({ theme }) => theme.animation.shine};
  background-color: #f0f0f0ff;
  height: 34px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.row};
  align-items: start;
  gap: 32px;
  height: 600px;
  width: 100%;
  @media screen and (max-width: 767px) {
    ${({ theme }) => theme.flex.column};
    height: fit-content;
  }
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: flex-start;
  width: 100%;
`;
