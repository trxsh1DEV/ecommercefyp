// import Newsletter from '../Newsletter/Newsletter';
import {
  Container,
  Center,
  ContactItem,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from './styles';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Room,
  MailOutline,
  Phone,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      {/* <Newsletter /> */}
      <Container>
        <Left>
          <Logo>FYP STORE</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            consequuntur quam, pariatur accusantium necessitatibus error omnis
            officia? Atque vel facilis libero fugit ut suscipit eligendi
            molestiae, doloremque alias, dignissimos earum?
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook fontSize="large" />
            </SocialIcon>
            <SocialIcon color="3B5999">
              <Instagram fontSize="large" />
            </SocialIcon>
            <SocialIcon color="3B5999">
              <Twitter fontSize="large" />
            </SocialIcon>
            <SocialIcon color="3B5999">
              <YouTube fontSize="large" />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Links rápidos</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Carrinho</ListItem>
            <ListItem>Gamers</ListItem>
            <ListItem>Home Office</ListItem>
            <ListItem>Periféricoos</ListItem>
            <ListItem>Minha conta</ListItem>
            <ListItem>Acompanhe seu pedido</ListItem>
            <ListItem>Favoritos</ListItem>
            <ListItem>Nossos Termos</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contatos</Title>
          <ContactItem>
            <Room style={{ marginRight: '10px' }} /> Rua Los Angeles, 110,
            06820-490 - SP/BR
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: '10px' }} /> 11 99999-9999
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: '10px' }} /> fypstore@fyp.com.br
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
