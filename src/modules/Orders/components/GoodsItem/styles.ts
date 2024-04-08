import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 24px;
  width: 100%;
  padding: 16px;
  height: 140px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.05),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 4px 24px -4px rgba(16, 24, 40, 0.05);
  .mobile-name {
    display: none;
  }
  @media screen and (max-width: 540px) {
    height: fit-content;
    gap: 16px;
    .mobile-name {
      display: flex;
    }
    .desktop-name {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    padding: 8px;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: stretch;
  gap: 24px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 540px) {
    gap: 16px;
  }
  @media screen and (max-width: 400px) {
    gap: 8px;
  }
`;

export const PreviewContainer = styled.div`
  width: 110px;
`;

export const Preview = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #cccccc89;
  padding: 8px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: center;
  height: 100%;
  gap: 8px;
  width: calc(100% - 130px);
  @media screen and (max-width: 400px) {
    width: calc(100% - 115px);
  }
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 12px;
  width: 100%;
  position: relative;
`;

export const EventRow = styled(Row)`
  flex-wrap: wrap;
`;

export const Name = styled.span`
  flex: 1 1 auto;
  font-size: 16px;
  font-weight: 500;
  word-break: break-word;
  ${({ theme }) => theme.text.getLineClamp(2)};
  @media screen and (max-width: 540px) {
    font-size: 14px;
    ${({ theme }) => theme.text.getLineClamp(4)};
  }
`;

export const Cel = styled.div`
  color: ${({ theme }) => theme.colors.regular};
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const Result = styled.span`
  ${({ theme }) => theme.flex.column};
  justify-content: space-between;
  margin-left: auto;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
  text-align: center;
`;

export const IconButton = styled.button`
  padding: 4px;
  @media screen and (max-width: 540px) {
    ${({ theme }) => theme.flex.center};
    background-color: ${({ theme }) => theme.colors.header};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(25px, -25px);
    padding: 4px;
    width: fit-content;
    height: auto;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 4px 24px -4px rgba(16, 24, 40, 0.05),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 4px 24px -4px rgba(16, 24, 40, 0.05);
  }
  @media screen and (max-width: 400px) {
    transform: translate(16px, -16px);
  }
`;

export const Counter = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: stretch;
  height: 36px;

  * {
    height: 100%;
  }
  button {
    padding: 8px 14px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 0;
    border-width: 1px 0;
    padding: 2px;
    text-align: center;
    width: 40px;
    background-color: #efd9763d;

    color: #1d2939;
    &:focus {
      border: 1px solid #d0d5dd;
    }
    &::placeholder {
      color: #98a2b3;
    }

    transition: 0.2s ease;
    height: 100%;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`;
