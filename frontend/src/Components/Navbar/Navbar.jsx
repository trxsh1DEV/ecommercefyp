import { Badge } from '@mui/material';
import { ShoppingCartOutlined, Search } from '@mui/icons-material';
import * as Styled from './styles';

const Navbar = () => {
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
          <Styled.MenuItem>REGISTER</Styled.MenuItem>
          <Styled.MenuItem>SIGN IN</Styled.MenuItem>
          <Styled.MenuItem>
            {/* <Badge><ShoppingCartOutlined /></Badge> */}
            <Badge
              badgeContent={4}
              sx={{
                '& .MuiBadge-badge': { fontSize: 15, height: 22, minWidth: 22 },
              }}
              color="secondary"
            >
              <ShoppingCartOutlined sx={{ fontSize: 30 }} />
            </Badge>
          </Styled.MenuItem>
        </Styled.Right>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Navbar;
