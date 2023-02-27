import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.section`
  width: 100%;
  max-width: 95%;
`;
