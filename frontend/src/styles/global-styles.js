import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #212534;
    color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6{
  }
  a {
    text-decoration: none;
  }
`;
