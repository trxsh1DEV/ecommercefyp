import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Container, TextContainer } from './styles';
import P from 'prop-types';
import axios from 'axios';
import { config } from '../../utils/requestMethods';

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Função para carregar produtos do servidor
    const loadProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5123/api/products?category=${category}`
            : 'http://localhost:5123/api/products',
          config,
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadProducts(); // Carregar produtos quando a categoria muda
  }, [category]);

  useEffect(() => {
    // Função para filtrar produtos com base nos filtros e classificação
    const filterAndSortProducts = () => {
      let filtered = products.slice(); // Crie uma cópia dos produtos

      // Aplicar filtros
      if (category) {
        filtered = filtered.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value),
          ),
        );
      }

      // Aplicar classificação
      if (sort === 'newest') {
        filtered.sort((a, b) => a.createdAt - b.createdAt);
      } else {
        filtered.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(filtered);
    };

    filterAndSortProducts(); // Filtrar e classificar produtos quando necessário
  }, [category, filters, products, sort]);

  return (
    <>
      <TextContainer>Mais Populares</TextContainer>
      <Container>
        {category
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .slice(0, 12)
              .map((item) => <Product item={item} key={item._id} />)}
      </Container>
    </>
  );
};

Products.propTypes = {
  category: P.string,
  filters: P.shape({
    size: P.string,
    color: P.string,
  }),
  sort: P.string,
};

export default Products;
