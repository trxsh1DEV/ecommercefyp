import * as S from './styles';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { deepPurple } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Cart from '../Cart/Cart';

const Navbar = () => {
  const cartQtd = useSelector((state) => state.cart.quantity);
  // const products = useSelector((state) => state.cart.products);

  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Left>
          <S.Item>
            <S.StyledLink className="link" to="/products/2">
              <S.SpanText>Pessoa física</S.SpanText>
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink className="link" to="/products/2">
              <S.SpanText>Empresas</S.SpanText>
            </S.StyledLink>
          </S.Item>
        </S.Left>
        <S.Center>
          <S.StyledLink className="link" to="/">
            <S.SpanText style={{ fontSize: '2rem' }}>FYP Store</S.SpanText>
          </S.StyledLink>
        </S.Center>
        <S.Left>
          <S.Item></S.Item>
          <S.Item>
            <S.StyledLink className="link" to="/">
              Sobre nós
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink className="link" to="/">
              Contato corporativo
            </S.StyledLink>
          </S.Item>
          <S.Icons>
            <SearchIcon fontSize="large" sx={{ color: deepPurple[200] }} />
            <PersonOutlineOutlinedIcon
              fontSize="large"
              sx={{ color: deepPurple[200] }}
            />
            <FavoriteBorderOutlinedIcon
              fontSize="large"
              sx={{ color: deepPurple[200] }}
            />
            <NavLink to="/cart">
              <S.CartIcon>
                <ShoppingCartOutlinedIcon
                  fontSize="large"
                  sx={{ color: deepPurple[200] }}
                />
                <S.Span>{cartQtd}</S.Span>
              </S.CartIcon>
            </NavLink>
          </S.Icons>
        </S.Left>
      </S.Wrapper>
      {/* {open && <Cart />} */}
    </S.Navbar>
  );
};

export default Navbar;
