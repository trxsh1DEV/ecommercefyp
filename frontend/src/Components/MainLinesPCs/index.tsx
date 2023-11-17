import React, { useState } from 'react';
import { Container, Items, Text, Image } from './styles';
import { StarBorder } from '@mui/icons-material';
import { MainLinesPcData } from '../../utils/data';

const MainLinesPc: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <Container>
      {MainLinesPcData.map((data, index) => (
        <Items
          key={index}
          onClick={() => handleItemClick(index)}
          className={activeItem === index ? 'active' : ''}
        >
          <Image src={data.icon} alt="" />
          <Text>{data.text}</Text>
        </Items>
      ))}
    </Container>
  );
};

export default MainLinesPc;
