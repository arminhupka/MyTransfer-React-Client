import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Header from "../components/Header/Header";
import fetcher from "../utils/fetcher";

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) center;
  background-size: cover;
  z-index: -1;
  opacity: ${({ background }) => (background ? 1 : 0)};
  transition: opacity 1s;

  @media screen and (min-width: 992px) {
    display: initial;
  }
`;

const MainLayout = ({ children }) => {
  const [background, setBackground] = useState("");

  const getRandomPhoto = async () => {
    try {
      const { data } = await fetcher.get("/photos/random");
      setBackground(data.urls.regular);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <Site>
        <Header />
        <Content>{children}</Content>
        <BackgroundOverlay background={background} />
      </Site>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
