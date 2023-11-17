import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 15vh;
  color: #333;
  background-color: #333;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  }

  50% {
    transform: scale(1.04);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  }
`;

export const Items = styled.div`
  width: 300px;
  height: 140px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 40px;
  color: aliceblue;
  border: 1px dashed #fff;
  filter: blur(0.7px);
  transition: all 400ms ease-in;

  &.active {
    background-color: ${({ theme }) => theme.colors.greenHack};
    filter: none;
    font-weight: 600;

    animation: ${pulseAnimation} 1s infinite; /* Adiciona a animação pulsante quando ativo */
  }
`;

export const Text = styled.span`
  margin-left: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
