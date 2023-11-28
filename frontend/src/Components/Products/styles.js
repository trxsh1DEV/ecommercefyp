import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  text-align: center;
  max-width: 100%;
  font-size: ${theme.fonts.sizes.xhuge};
  font-weight: bold;
  margin-top: 4rem;
  `}
`;
