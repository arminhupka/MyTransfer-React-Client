import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import MainLayout from "../layout/MainLayout";
import UploadForm from "../components/UploadForm/UploadForm";
import UploadStatus from "../components/UploadStatus/UploadStatus";
import UploadDetails from "../components/UploadDetails/UploadDetails";

const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 992px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HomeView = () => {
  const fileState = useSelector((state) => state.fileReducer);

  return (
    <>
      <Helmet>
        <title>MyTransfer</title>
      </Helmet>
      <MainLayout>
        <Wrapper>
          {!fileState.isUploading && !fileState.isUploaded && !fileState.slug ? <UploadForm /> : null}
          {fileState.isUploading ? <UploadStatus /> : null}
          {fileState.isUploaded && fileState.slug ? <UploadDetails /> : null}
        </Wrapper>
      </MainLayout>
    </>
  );
};

export default HomeView;
