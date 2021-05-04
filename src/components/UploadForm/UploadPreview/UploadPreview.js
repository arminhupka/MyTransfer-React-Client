import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.radius};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileName = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FileSize = styled.span``;

const ImagePrev = styled.div`
  height: 7rem;
  width: 7rem;
  margin-right: 2rem;
  background: url(${({ src }) => src});
  background-size: cover;
  border-radius: ${({ theme }) => theme.radius};
`;

const UploadPreview = ({ fileName, fileSize, filePreview }) => {
  // const convertFileSize = (bytes) => {
  //   const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  //   if (bytes === 0) return "0 Byte";
  //   const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  //   return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  // };

  return (
    <Wrapper>
      {filePreview ? <ImagePrev src={filePreview} /> : null}
      <InfoWrapper>
        <FileName>{fileName}</FileName>
        <FileSize>{fileSize}</FileSize>
      </InfoWrapper>
    </Wrapper>
  );
};

UploadPreview.defaultProps = {
  filePreview: "",
};

UploadPreview.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.number.isRequired,
  filePreview: PropTypes.string,
};

export default UploadPreview;
