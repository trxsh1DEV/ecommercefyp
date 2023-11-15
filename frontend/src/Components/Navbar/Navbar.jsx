import * as S from './styles';

import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { deepPurple } from '@mui/material/colors';
// import Cart from '../Cart/Cart';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const products = useSelector((state) => state.cart.products);

  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Left>
          <S.Item>
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon sx={{ color: deepPurple[50] }} />
          </S.Item>
          <S.Item>
            <S.SpanText>BRL</S.SpanText>
            <KeyboardArrowDownIcon sx={{ color: deepPurple[50] }} />
          </S.Item>
          <S.Item>
            <S.StyledLink className="link" to="/products/2">
              <S.SpanText>Pessoa física</S.SpanText>
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink className="link" to="/products/2">
              <S.SpanText>Pessoa Juridica/Empresas</S.SpanText>
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
            <S.CartIcon onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon
                fontSize="large"
                sx={{ color: deepPurple[200] }}
              />
              <S.Span>2</S.Span>
            </S.CartIcon>
          </S.Icons>
        </S.Left>
      </S.Wrapper>
      {/* {open && <Cart />} */}
    </S.Navbar>
  );
};

export default Navbar;
