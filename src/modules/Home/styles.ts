import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  min-height: 100%;
  height: fit-content;
  gap: 120px;
  padding-bottom: 60px;
  @media screen and (max-width: 1280px) {
    gap: 100px;
  }
  @media screen and (max-width: 767px) {
    gap: 80px;
  }
  @media screen and (max-width: 540px) {
    gap: 40px;
    padding-bottom: 40px;
  }
`;
