import styled from 'styled-components';
import { mobile } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: calc(70vh - 60px);
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  align-items: center;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  height: auto; /* Para manter a proporção da imagem */
  max-width: 80%; /* Torna a imagem responsiva */
  margin-left: 6rem;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-left: 3rem;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
