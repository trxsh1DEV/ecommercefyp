import styled from 'styled-components';
import { mobile } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  max-width: 100%;
  ${mobile({ flexDirection: 'column' })}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  max-width: 100%;

  /* @media screen and (max-width: 768px) {
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  } */
`;

export const Items = styled.div`
  background-color: #3498db;
  /* clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%); */

  &:nth-child(2n) {
    background-color: #e74c3c;
  }
`;
