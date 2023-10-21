import { css } from 'styled-components';

export const theme = {
  colors: {
    primaryColor: 'purple',
    darkColor: '#333',
    whiteColor: '#fff',
    grayColor: 'lightgray',
  },
  fonts: {
    family: {
      default: "'Urbanist', sans-serif",
      secondary: "'Open Sans', -apple-system",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '6rem',
    xhuge: '6.4rem',
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
