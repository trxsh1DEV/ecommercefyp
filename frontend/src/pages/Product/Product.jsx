import { Add, Remove } from '@mui/icons-material';
import * as Styled from './styles';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Announcement } from '../../Components/Announcement/Announcement';

const Product = () => {
  return (
    <Styled.Container>
      <Navbar />
      <Announcement />
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.Title>Denim Jumpsuit</Styled.Title>
          <Styled.Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Styled.Desc>
          <Styled.Price>$ 20</Styled.Price>
          <Styled.FilterContainer>
            <Styled.Filter>
              <Styled.FilterTitle>Color</Styled.FilterTitle>
              <Styled.FilterColor color="black" />
              <Styled.FilterColor color="darkblue" />
              <Styled.FilterColor color="gray" />
            </Styled.Filter>
            <Styled.Filter>
              <Styled.FilterTitle>Size</Styled.FilterTitle>
              <Styled.FilterSize>
                <Styled.FilterSizeOption>XS</Styled.FilterSizeOption>
                <Styled.FilterSizeOption>S</Styled.FilterSizeOption>
                <Styled.FilterSizeOption>M</Styled.FilterSizeOption>
                <Styled.FilterSizeOption>L</Styled.FilterSizeOption>
                <Styled.FilterSizeOption>XL</Styled.FilterSizeOption>
              </Styled.FilterSize>
            </Styled.Filter>
          </Styled.FilterContainer>
          <Styled.AddContainer>
            <Styled.AmountContainer>
              <Remove />
              <Styled.Amount>1</Styled.Amount>
              <Add />
            </Styled.AmountContainer>
            <Styled.Button>ADD TO CART</Styled.Button>
          </Styled.AddContainer>
        </Styled.InfoContainer>
      </Styled.Wrapper>
      <Newsletter />
      <Footer />
    </Styled.Container>
  );
};

export default Product;
