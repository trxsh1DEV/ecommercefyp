import React, { useEffect } from 'react';
import { CloseButton, Content, ModalContainer, Backdrop } from './styles';

interface ModalProps {
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    // Adiciona uma classe ao body para prevenir o scroll do conteúdo por trás do modal
    document.body.classList.add('modal-open');

    return () => {
      // Remove a classe do body ao fechar o modal
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <ModalContainer>
      <Backdrop onClick={onClose} />
      <Content>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <div>{children}</div>
      </Content>
    </ModalContainer>
  );
};

export default Modal;
