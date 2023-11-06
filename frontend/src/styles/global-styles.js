import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,700;1,500;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Urbanist:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

  }

  h1, h2, h3, h4, h5, h6{
  }

  a {
    text-decoration: none;
  }
`;
