import { css, styled } from 'styled-components';

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
    blueLight: '#7debf4',
    greenMarin: '#6fdcd3',
    greenLight: '#70efde',
    greenHack: '#00d107',
    rose: '#d581d8',
    lilas: '#caabfd',
    pink: '#ffb5f7',
    white: '#fff',
  },
  fonts: {
    family: {
      default: "'Urbanist', sans-serif",
      secondary: "'Open Sans'",
    },
    sizes: {
      xsmall: '1.4rem',
      small: '1.6rem',
      xmedium: '2.2rem',
      medium: '2.4rem',
      large: '2.8rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6rem',
      xxhuge: '7.8rem',
    },
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.2rem',
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
    @media only screen and (max-width: 770px) {
      ${props}
      /* object-fit: contain; */
    }
  `;
};

export const Heading1 = styled.h1`
  font-size: ${theme.fonts.sizes.xmedium};
`;

export const Heading2 = styled.h2`
  font-size: ${theme.fonts.sizes.large};
`;

export const mediaQuery = (props, width) => {
  return css`
    @media only screen and (max-width: ${width}) {
      ${props}
      /* object-fit: contain; */
    }
  `;
};
