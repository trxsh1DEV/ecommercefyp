import styled, { css } from 'styled-components';
import { mobile } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacings.huge};
    background-color: ${theme.colors.darkColorLight};
    ${mobile({ height: theme.spacings.xxlarge })};
    overflow: hidden;
  `}
`;

export const Wrapper = styled.div`
  padding: 1.2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0' })}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.primaryPurple};
    transition: all 300ms ease-in-out;
    transform: translateX(-50%);
    color: red;

  }

  &:hover::after {
    width: 65%;
  }

  &:hover {
    opacity: .87;
  }
`;

export const StyledLink = styled(Link)`
  color: aliceblue;
`;

export const Image = styled.img``;

export const Center = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const IconStyles = css`
  color: #fff;
  font-size: large;
`;

export const CartIcon = styled.div`
  position: relative;
`;

export const Span = styled.span`
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: blueviolet;
  color: white;
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanText = styled.span`
  color: aliceblue;
`;
