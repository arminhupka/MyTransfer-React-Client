import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";
import { Input } from "../Elements/Elements";
import IconWrapper from "../IconWrapper/IconWrapper";

import reactIcon from "../../assets/ready-icon.svg";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  text-align: center;
`;

const UploadDetails = () => {
  const fileState = useSelector((state) => state.fileReducer);

  return (
    <StyledWrapper>
      <IconWrapper icon={reactIcon} />
      <h2>File is ready to share</h2>
      <StyledInput disabled value={`${process.env.REACT_APP_HOST}/${fileState.slug}`} />
    </StyledWrapper>
  );
};

export default UploadDetails;
