import React from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percents = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const UploadStatus = () => {
  const fileState = useSelector((state) => state.fileReducer);

  return (
    <StyledWrapper>
      <Percents>{fileState.uploadedPercent}%</Percents>
      <Circle percent={fileState.uploadedPercent} strokeWidth="4" strokeColor="#EE3B25" />
    </StyledWrapper>
  );
};

export default UploadStatus;
