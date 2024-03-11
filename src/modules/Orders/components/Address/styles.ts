import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  width: 100%;
  @media screen and (max-width: 540px) {
    gap: 0;
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
