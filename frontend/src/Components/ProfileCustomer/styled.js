import styled from 'styled-components';

// Estilizando os componentes com Styled Components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 2rem; Reduzi o espaçamento entre os itens para um valor mais responsivo */
  margin: 10px 25px;
  background-color: #333;
  overflow: hidden;


  @media (max-width: 768px) {
    /* Ajuste para telas menores */
    gap: 1rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
