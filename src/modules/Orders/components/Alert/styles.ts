import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  ${({ theme }) => theme.flex.center}
  flex-direction: column;
  width: 100vw;
  height: fit-content;
  max-width: 400px;
  padding: 32px 16px;
  border-radius: 4px;
  gap: 20px;
  button {
    padding: 12px 16px;
    border-radius: 4px;
  }
  @media screen and (max-width: 540px) {
    width: calc(100vw - 32px);
  }
`;

export const DoneIcon = styled.img`
  width: 100%;
  max-width: 70px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
`;

export const Message = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;
