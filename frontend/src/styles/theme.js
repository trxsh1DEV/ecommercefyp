import { css } from 'styled-components';

export const theme = {
  colors: {
    primaryColor: '#6200EE',
    primaryPurple: '#ea80fc',
    darkColorLight: '#4a4b50',
    darkColorStrong: '#191919',
    lightPurple: '#bb86fc',
    gray: '#aaaaaa',
    lightGray: '#f8f8f8',
    error: '#B00020',
    blueMarin: '#3de0e0',
    blueLight: '7debf4',
    greenMarin: '#6fdcd3',
    greenLight: '#70efde',
    rose: '#d581d8',
    lilas: '#caabfd',
    pink: '#ffb5f7',
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
      xxhuge: '7.8rem',
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
    @media only screen and (max-width: 760px) {
      ${props}
    }
  `;
};
