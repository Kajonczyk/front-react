import React from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";
import { StyledButton } from "./Button";
const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.green};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.formMobile};
  padding-top: 10px;
  margin-bottom: 20px;
  margin-top: -50px;
`;

const StyledLoginBox = styled.div`
  background-color: ${({ theme }) => theme.lightgreen};
  height: 450px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.lightgreen};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
`;
const StyledFormText = styled.span`
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  color: ${({ theme }) => theme.green};
  text-decoration: underline;
  cursor: pointer;
`;

const LoginForm = () => {
  return (
    <StyledLoginBox>
      <StyledLoginP>Log In</StyledLoginP>
      <StyledInput type="text" placeholder="Login" />

      <StyledInput type="password" placeholder="Password" />
      <StyledFormText>Dont have an account? Register here!</StyledFormText>
      <StyledButtonWrapper>
        <StyledButton>Create</StyledButton>
      </StyledButtonWrapper>
    </StyledLoginBox>
  );
};

export default LoginForm;
