import { Add, Remove } from '@mui/icons-material';
import * as Styled from './styles';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Announcement } from '../../Components/Announcement/Announcement';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRequest } from '../../utils/requestMethods';
import { addProduct } from '../../redux/cart';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest(`products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type == 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Styled.Container>
      <Navbar />
      <Announcement />
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.Image src={product.img} />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.Title>{product.title}</Styled.Title>
          <Styled.Desc>{product.desc}</Styled.Desc>
          <Styled.Price>$ {product.price}</Styled.Price>
          <Styled.FilterContainer>
            <Styled.Filter>
              <Styled.FilterTitle>Color</Styled.FilterTitle>
              {product.color?.map((c) => (
                <Styled.FilterColor
                  color={c}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </Styled.Filter>
            <Styled.Filter>
              <Styled.FilterTitle>Size</Styled.FilterTitle>
              <Styled.FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Styled.FilterSizeOption key={s}>{s}</Styled.FilterSizeOption>
                ))}
              </Styled.FilterSize>
            </Styled.Filter>
          </Styled.FilterContainer>
          <Styled.AddContainer>
            <Styled.AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Styled.Amount>{quantity}</Styled.Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </Styled.AmountContainer>
            <Styled.Button onClick={handleClick}>ADD TO CART</Styled.Button>
          </Styled.AddContainer>
        </Styled.InfoContainer>
      </Styled.Wrapper>
      <Newsletter />
      <Footer />
    </Styled.Container>
  );
};

export default Product;
