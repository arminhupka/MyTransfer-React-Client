import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";
import ProgressCircle from "./ProgressCircle/ProgressCircle";

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
      <ProgressCircle
        progress={fileState.uploadedPercent}
        size={300}
        strokeWidth={15}
        circleOneStroke="#B5B7C4"
        circleTwoStroke="#549CF8"
      />
    </StyledWrapper>
  );
};

export default UploadStatus;
