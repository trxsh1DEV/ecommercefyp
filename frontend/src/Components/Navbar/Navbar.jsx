import { Badge } from '@mui/material';
import { ShoppingCartOutlined, Search } from '@mui/icons-material';
import * as Styled from './styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // usando redux cart
  const { quantity } = useSelector((state) => state.cart);

  const linkStyle = {
    textDecoration: 'none',
    color: '#000', // Cor do link (opcional)
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Left>
          <Styled.Language>PT-BR</Styled.Language>
          <Styled.SearchContainer>
            <Styled.Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 20 }} />
          </Styled.SearchContainer>
        </Styled.Left>
        <Styled.Center>
          <Styled.Logo>LOGO</Styled.Logo>
        </Styled.Center>
        <Styled.Right>
          <Link to="/register" style={linkStyle}>
            <Styled.MenuItem>REGISTER</Styled.MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <Styled.MenuItem>SIGN IN</Styled.MenuItem>
          </Link>
          <Link to="/cart">
            <Styled.MenuItem>
              <Badge
                badgeContent={quantity}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: 15,
                    height: 22,
                    minWidth: 22,
                  },
                }}
              >
                <ShoppingCartOutlined sx={{ fontSize: 30 }} />
              </Badge>
            </Styled.MenuItem>
          </Link>
        </Styled.Right>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Navbar;
