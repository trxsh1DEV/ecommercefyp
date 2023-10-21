import { Link } from 'react-router-dom';
import { Button, Container, Image, Info, Title } from './styles';
import P from 'prop-types';

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

CategoryItem.propTypes = {
  item: P.shape({
    id: P.number.isRequired,
    img: P.string.isRequired,
    title: P.string.isRequired,
    category: P.string.isRequired,
  }),
};

export default CategoryItem;
