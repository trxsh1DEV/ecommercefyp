// import { Badge } from '@mui/material';
// import { ShoppingCartOutlined, Search } from '@mui/icons-material';
import * as S from './styles';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
            <KeyboardArrowDownIcon />
          </S.Item>
          <S.Item>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </S.Item>
          <S.Item>
            <Link className="link" to="/products/1"></Link>
          </S.Item>
          <S.Item>
            <Link className="link" to="/products/2">
              Pessoa física
            </Link>
          </S.Item>
          <S.Item>
            <Link className="link" to="/products/2">
              Pessoa Juridica/Empresas
            </Link>
          </S.Item>
        </S.Left>
        <S.Center>
          <Link className="link" to="/">
            FYP Store
          </Link>
        </S.Center>
        <S.Left>
          <S.Item>
            <Link className="link" to="/">
              Início
            </Link>
          </S.Item>
          <S.Item>
            <Link className="link" to="/">
              Sobre nós
            </Link>
          </S.Item>
          <S.Item>
            <Link className="link" to="/">
              Contato corporativo
            </Link>
          </S.Item>
          <S.Icons>
            <SearchIcon fontSize="large" />
            <PersonOutlineOutlinedIcon fontSize="large" />
            <FavoriteBorderOutlinedIcon fontSize="large" />
            <S.CartIcon onClick={() => setOpen(!open)} fontSize="large">
              <ShoppingCartOutlinedIcon />
              <S.Span>asdsa</S.Span>
            </S.CartIcon>
          </S.Icons>
        </S.Left>
      </S.Wrapper>
      {/* {open && <Cart />} */}
    </S.Navbar>
  );
};

export default Navbar;
