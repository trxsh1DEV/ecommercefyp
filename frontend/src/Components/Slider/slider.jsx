import { useState } from 'react';
import P from 'prop-types';
import {
  Arrow,
  Button,
  Container,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from './styles';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../../utils/data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideindex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Compre agora</Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

Slider.propTypes = {
  slideIndex: P.number,
  handleClick: P.func,
};

export default Slider;
