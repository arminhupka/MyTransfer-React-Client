import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// COMPONENTS
import { Button, FileDropper, FilePlaceholder, Input, Label, TextArea } from "../Elements/Elements";
import UploadPreview from "./UploadPreview/UploadPreview";
import Wrapper from "../Wrapper/Wrapper";

// ACTIONS
import { loadFile, setPercent, setSlug, uploadEnd, uploadStart } from "../../actions/fileActions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Button} {
    margin-top: 2rem;
  }
`;

const UploadForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [emailTo, setEmailTo] = useState("");
  const [file, setFile] = useState(null);
  const [tmpFile, setTmpFile] = useState(null);
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "emailTo":
        setEmailTo(value);
        break;
      default:
    }
  };

  const createPreview = (file) => {
    const tmp = URL.createObjectURL(file);
    setTmpFile(tmp);
  };

  const handleUploadProgress = (progressEvent) => {
    dispatch(setPercent(progressEvent));
  };

  const handleFile = (file) => {
    setFile(file);
    dispatch(loadFile(file));

    if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") {
      createPreview(file);
    }
  };

  const uploadFile = async (name, description, emailTo, file) => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("emailTo", emailTo);
    formData.append("file", file);

    try {
      dispatch(uploadStart());

      const resp = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_MYTRANSFER_URL}/upload`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          handleUploadProgress(progressEvent);
        },
      });

      dispatch(uploadEnd());
      dispatch(setSlug(resp.data.slug));

      setName("");
      setDescription("");
      setEmailTo("");
      setFile(null);
    } catch (err) {
      console.log(err);
      const errorMsg = err.response.data.error;
      setError(errorMsg);

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    if (name && description && emailTo && emailTo && file) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, description, emailTo, file]);

  return (
    <Wrapper>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          uploadFile(name, description, emailTo, file);
        }}
      >
        <Label>Your Name</Label>
        <Input name="name" placeholder="Write your name" value={name} onChange={handleInput} required />
        <Label>Description</Label>
        <TextArea
          name="description"
          placeholder="Write detailed description"
          value={description}
          onChange={handleInput}
          required
        />
        <Label>Email to</Label>
        <Input
          type="email"
          name="emailTo"
          placeholder="Enter the recipient email"
          value={emailTo}
          onChange={handleInput}
          required
        />
        {file === null ? (
          <>
            <FilePlaceholder htmlFor="fileUpload" />
            <FileDropper id="fileUpload" type="file" onChange={(e) => handleFile(e.target.files[0])} />
          </>
        ) : (
          <>
            <UploadPreview fileName={file.name} fileSize={file.size} filePreview={tmpFile} />
          </>
        )}
        {error ? <p>{error}</p> : null}
        <Button download disabled={isDisabled} type="submit">
          Upload File
        </Button>
      </StyledForm>
    </Wrapper>
  );
};
export default UploadForm;
