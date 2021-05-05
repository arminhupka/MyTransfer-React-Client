import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.primary};
  mask: url(${({ icon }) => icon}) no-repeat center;
  mask-size: cover;
  transition: background-color 0.6s;
`;

const IconWrapper = ({ icon }) => <Wrapper icon={icon} />;

IconWrapper.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconWrapper;
