import styled, { css } from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.lightGray};
  border: 0.1rem solid ${({ theme }) => theme.gray};
  border-radius: ${({ theme }) => theme.radius};

  :focus {
    outline: none;
    box-shadow: 0 0 1rem ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.lightGray};
  border: 0.1rem solid ${({ theme }) => theme.gray};
  border-radius: ${({ theme }) => theme.radius};
  resize: vertical;

  :focus {
    outline: none;
    box-shadow: 0 0 1rem ${({ theme }) => theme.primary};
  }
`;

export const FilePlaceholder = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  padding: 2rem;
  background: ${({ theme }) => theme.primaryLight};
  border: 0.2rem dashed ${({ theme }) => theme.primaryDark};
  border-radius: ${({ theme }) => theme.radius};
  outline: none;
  transition: transform 1s;
  cursor: pointer;

  :hover {
    transform: scale(1.01);
  }

  ::before {
    content: "select file to upload";
  }
`;

export const FileDropper = styled.input`
  display: none;
  // position: relative;
  // width: 100%;
  // height: 15rem;
  // padding: 2rem;
  // background: ${({ theme }) => theme.primaryLight};
  // border: .2rem dashed ${({ theme }) => theme.primaryDark};
  // border-radius: ${({ theme }) => theme.radius};
  // outline: none;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  padding: 1.5rem 2.5rem;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.darkGray};
      :hover {
        background-color: ${({ theme }) => theme.darkGray};
      }
    `}

  ${({ download }) =>
    download &&
    css`
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    `}
`;
