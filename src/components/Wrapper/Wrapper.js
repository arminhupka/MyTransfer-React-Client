import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: #fff;

  @media screen and (min-width: 992px) {
    width: 100%;
    max-width: 45rem;
    border-radius: 2.5rem;
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);
  }
`;

export default StyledWrapper;
