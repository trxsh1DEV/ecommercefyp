import { Circle, Container, Icon, Image, Info } from './styles';
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import P from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  if (!item || !item.img) {
    return null; // or display an error message
  }

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

Product.propTypes = {
  item: P.shape({
    _id: P.string.isRequired,
    img: P.string.isRequired,
  }).isRequired,
};

export default Product;
