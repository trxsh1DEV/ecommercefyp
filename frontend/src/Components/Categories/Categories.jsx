import { categories } from '../../utils/data';
import CategoryItem from '../CategoryItem/CategoryItem';
import { Container } from './styles';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
