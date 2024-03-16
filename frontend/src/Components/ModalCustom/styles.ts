import styled from 'styled-components';

interface ModalProps {
  onClose: () => void;
}

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo opaco */
`;

export const Content = styled.div`
    max-width: 800px;
    width: 400px;
    min-height: 200px;
    position: relative;
    background-color: #343434;
    padding: 0.2rem 2rem;
    border-radius: 5px;
    z-index: 2;
`;

export const CloseButton = styled.div`
overflow: hidden;
position: relative;
width: fit-content;
font-size: 4rem;
/* text-align: end; */
cursor: pointer;
`;
