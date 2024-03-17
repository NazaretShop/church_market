import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 1600px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 150px;
  ${({ theme }) => theme.flex.column};
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    padding: 80px;
  }

  @media screen and (max-width: 540px) {
    padding: 80px 16px;
  }
  @media screen and (max-height: 440px) and (orientation: landscape) {
    padding: 40px 16px;
  }
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

export const Block = styled.div`
  ${({ theme }) => theme.flex.column};
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 100%;
  z-index: 2;
  gap: 16px;
  width: fit-content;
  padding: 24px;
  border: 0 solid #efd976;
  backdrop-filter: blur(7px);
  background-color: #0000004c;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
  min-width: 300px;
  max-width: 400px;
  @media screen and (max-width: 540px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.text.getLineClamp(2)};
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-align: left;
`;

export const Description = styled.div`
  ${({ theme }) => theme.text.getLineClamp(8)};
  font-size: 14px;
  color: #fff;
  text-align: left;
  line-height: 1.6;

  @media screen and (max-width: 767px) {
    line-height: 1.5;
  }
`;
