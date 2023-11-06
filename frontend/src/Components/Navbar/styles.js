import styled, { css } from 'styled-components';
import { mobile } from '../../styles/theme';

export const Navbar = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacings.huge};
    ${mobile({ height: theme.spacings.xxlarge })}
  `}
`;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0' })}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Image = styled.img``;

export const Center = styled.div`
  font-size: 30px;
  letter-spacing: 2px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 15px;
  color: #777;
  cursor: pointer;
`;

export const CartIcon = styled.div`
  position: relative;
`;

export const Span = styled.span`
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2879fe;
  color: white;
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
