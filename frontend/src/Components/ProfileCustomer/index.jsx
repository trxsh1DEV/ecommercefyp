import { Container, Item, Image } from './styled';

const PublicCustomer = () => {
  return (
    <Container>
      <Item>
        <a href="https://google.com.br" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.dooca.store/107/files/monte-seu-pc.png?v=1572472796&webp=0"
            alt=""
          />
        </a>
      </Item>
      <Item>
        <a href="https://google.com.br" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.dooca.store/107/files/vaijogaroque-2.png?v=1572472544&webp=0"
            alt=""
          />
        </a>
      </Item>
    </Container>
  );
};

export default PublicCustomer;
