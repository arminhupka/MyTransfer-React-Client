import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";
import { Input } from "../Elements/Elements";

import reactIcon from "../../assets/ready-icon.svg";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CheckIcon = styled.img`
  width: 25%;
  filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
`;

const StyledInput = styled(Input)`
  text-align: center;
`;

const UploadDetails = () => {
  const fileState = useSelector((state) => state.fileReducer);

  return (
    <StyledWrapper>
      <CheckIcon src={reactIcon} alt="Ready Icon" />
      <h2>File is ready to share</h2>
      <StyledInput disabled value={`${process.env.REACT_APP_HOST}/${fileState.slug}`} />
    </StyledWrapper>
  );
};

export default UploadDetails;
