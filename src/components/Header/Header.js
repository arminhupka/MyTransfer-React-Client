import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 2rem 2.4rem;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  z-index: 500;

  @media screen and (min-width: 992px) {
    position: absolute;
    width: 100%;
    background-color: transparent;
    border: none;
  }
`;

const Branding = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: #333;
  text-shadow: rgba(0, 0, 0, 0.2) 0 0.5rem 1rem;

  @media screen and (min-width: 992px) {
    color: #fff;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Branding>MyTransfer</Branding>
    </Link>
  </StyledHeader>
);

export default Header;
