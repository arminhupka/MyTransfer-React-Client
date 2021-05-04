import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";

import MainLayout from "../layout/MainLayout";
import Wrapper from "../components/Wrapper/Wrapper";
import { Button } from "../components/Elements/Elements";

import errorIcon from "../assets/error-icon.svg";

const PageWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 992px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const StyledLink = styled.a`
  color: inherit;
`;

const ErrorIcon = styled.img`
  width: 25%;
  filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
`;

const DownloadView = ({ match }) => {
  const { slug } = match.params;

  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const getFile = async (slug) => {
    try {
      const resp = await axios.get(`${process.env.REACT_APP_MYTRANSFER_URL}/file/${slug}`);
      setFile(resp.data.file.dlLink);
    } catch (err) {
      if (err.response.status === 404) {
        setError(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    getFile(slug);
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>MyTransfer</title>
      </Helmet>
      <MainLayout>
        <PageWrapper>
          <StyledWrapper>
            {error ? (
              <>
                <ErrorIcon src={errorIcon} />
                <Title>{error}</Title>
              </>
            ) : null}
            {file ? (
              <>
                <Title>Download your file</Title>
                <Button>
                  <StyledLink href={file} download>
                    Download
                  </StyledLink>
                </Button>
              </>
            ) : null}
          </StyledWrapper>
        </PageWrapper>
      </MainLayout>
    </>
  );
};

DownloadView.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default DownloadView;
