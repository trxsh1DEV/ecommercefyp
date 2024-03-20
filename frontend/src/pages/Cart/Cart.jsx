// cart.jsx
import {
  Bottom,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from './styles';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Add, Remove } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../../redux/cart'; // Verifique o caminho correto

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const exampleSubTotal = 5.9;
  const exampleShipping = 14.9;

  const handleQuantity = (type, productId) => {
    if (type === 'inc') {
      dispatch(increaseQuantity(productId));
    } else {
      dispatch(decreaseQuantity(productId));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            {/* <TopText>Your Wishlist (0)</TopText> */}
            <TopText onClick={() => handleClearCart()}>Limpar carrinho</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((prod) => (
              <Product key={prod._id}>
                <ProductDetail>
                  <Image src={prod.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {prod.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {prod._id}
                    </ProductId>
                    <ProductColor color={prod.color} />
                    <ProductSize>
                      <b>Size:</b> {prod.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleQuantity('inc', prod._id)}
                    />
                    <ProductAmount>{prod.quantity}</ProductAmount>
                    <Remove
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleQuantity('dec', prod._id)}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {(prod.price * prod.quantity).toFixed(2)}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Hr />
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                $ {(cart.total - exampleSubTotal).toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping (example)</SummaryItemText>
              <SummaryItemPrice>$ {exampleShipping}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount (example)</SummaryItemText>
              <SummaryItemPrice>$ -{exampleSubTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
