import Flickity from 'react-flickity-component';
import { sliderItems } from '../../utils/data';
import 'flickity/css/flickity.css';
import { Slide, SlideContent, SliderContainer } from './styles';
import OptionsShortcuts from '../OptionsShortcuts';

const flickityOptions = {
  contain: true,
  wrapAround: true,
};

// const slides = [
//   { id: 1, content: 'Slide 1', bgColor: '#3498db' },
//   { id: 2, content: 'Slide 2', bgColor: '#e74c3c' },
//   { id: 3, content: 'Slide 3', bgColor: '#2ecc71' },
// ];

const Slider = () => {
  return (
    <SliderContainer>
      <OptionsShortcuts />
      <Flickity options={flickityOptions}>
        {sliderItems.map((slide) => (
          <Slide key={slide.id}>
            <SlideContent>
              <img src={slide.img} alt={`Slide ${slide.title}`} />
            </SlideContent>
          </Slide>
        ))}
      </Flickity>
    </SliderContainer>
  );
};

export default Slider;
