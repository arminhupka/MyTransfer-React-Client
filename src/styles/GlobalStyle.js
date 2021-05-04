import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #333;
    
    @media screen and (min-width: 992px) {
      background-color: #EFEFEF;

    }
  }

  button, input, textarea {
    font-family: 'Open Sans', sans-serif;
  }

  input, textarea {
    ::placeholder {
      color: ${({ theme }) => theme.darkGray};
    }
  }

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
