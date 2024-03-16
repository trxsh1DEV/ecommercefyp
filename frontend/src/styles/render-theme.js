import styled from 'styled-components';
import { theme } from './theme';

export const InputText = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: ${theme.fonts.sizes.medium};
  outline: none; /* Remove a borda de foco padrão */
  transition: border-color 0.3s ease; /* Adiciona uma transição suave na mudança de cor da borda */

  /* Estilo para quando o input está em foco */
  &:focus {
    border-color: #007bff; /* Altera a cor da borda quando em foco */
  }

  /* Estilo para quando o input está preenchido */
  &:not(:placeholder-shown) {
    border-color: #28a745; /* Altera a cor da borda quando o input está preenchido */
  }

  /* Estilo para quando o input está desabilitado */
  &:disabled {
    background-color: #f8f9fa; /* Altera a cor de fundo quando o input está desabilitado */
    color: #6c757d; /* Altera a cor do texto quando o input está desabilitado */
  }
`;
