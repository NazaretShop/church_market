import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: center;
  gap: 4px;
  width: 100%;
  max-width: 240px;
`;

export const Container = styled.div`
  padding: 0 8px;
  width: 100%;
`;

export const Value = styled.div`
  font-size: 14px;
`;

export const Flex = styled.div`
  ${({ theme }) => theme.flex.between};
  width: 100%;
`;
