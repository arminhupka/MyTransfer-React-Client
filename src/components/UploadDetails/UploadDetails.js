import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";
import { Button, Input } from "../Elements/Elements";
import IconWrapper from "../IconWrapper/IconWrapper";

import reactIcon from "../../assets/ready-icon.svg";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  text-align: center;
`;

const UploadDetails = () => {
  const fileState = useSelector((state) => state.fileReducer);

  const copyLink = (slug) => navigator.clipboard.writeText(`${process.env.REACT_APP_HOST}/${slug}`);

  return (
    <StyledWrapper>
      <IconWrapper icon={reactIcon} />
      <h1>File is ready to share</h1>
      <StyledInput disabled value={`${process.env.REACT_APP_HOST}/${fileState.slug}`} />
      <Button onClick={() => copyLink(fileState.slug)}>Copy Link</Button>
    </StyledWrapper>
  );
};

export default UploadDetails;
