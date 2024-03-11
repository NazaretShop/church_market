import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: rgb(244, 244, 244);
  width: 100%;
  border-top: 1px solid #d0d5dd;
`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 14px;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const Slogan = styled.div`
  margin: auto 0;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  width: 100%;
  @media screen and (min-width: 541px) {
    .mobile-description {
      display: none;
    }
    .desktop-description {
      display: block;
    }
  }
  @media screen and (max-width: 540px) {
    padding-bottom: 32px;
    .mobile-description {
      display: block;
    }
    .desktop-description {
      display: none;
    }
  }
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: stretch;
  padding: 20px 0;
  width: 100%;
  gap: 40px;
  @media screen and (max-width: 540px) {
    gap: 16px;
  }
`;

export const LogoIcon = styled.img`
  height: 100px;
  width: auto;
`;

export const Media = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 12px;
  margin-top: 8px;
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContactWrapper = styled.div`
  ${({ theme }) => theme.flex.column};
`;

export const Contact = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: center;
  gap: 6px;
  margin-top: auto;
  svg {
    width: 16px;
  }
  a {
    color: ${({ theme }) => theme.colors.buttonOutline};
    line-height: 1.5;
    font-size: 14px;
  }
  @media screen and (max-width: 540px) {
    gap: 4px;

    svg {
      width: 14px;
    }
    a {
      font-size: 12px;
    }
  }
`;

export const Socials = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 16px;
  @media screen and (min-width: 541px) {
    margin-left: auto;
  }
`;

export const Link = styled.a`
  ${({ theme }) => theme.flex.center};

  * {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 540px) {
    * {
      width: 20px;
      height: 20px;
    }
  }
`;
