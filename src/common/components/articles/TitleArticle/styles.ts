import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 8px;
`;

export const Line = styled.div`
  flex: 1 1 auto;
  display: block;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3434342d;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 16px;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;
