import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.primary};
  mask: url(${({ icon }) => icon}) no-repeat center;
  mask-size: cover;
  transition: background-color 0.6s;

  ${({ error }) =>
    error &&
    css`
      background-color: #d21414;
    `}
`;

const IconWrapper = ({ icon, error }) => <Wrapper icon={icon} error={error} />;

IconWrapper.defaultProps = {
  error: false,
};

IconWrapper.propTypes = {
  icon: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default IconWrapper;
