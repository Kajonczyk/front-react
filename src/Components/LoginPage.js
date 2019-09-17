import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";
import { StyledButton } from "./Button";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.green};
  min-height: 100vh;
`;
const StyledH1 = styled.h1`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;

  &::after {
    content: "JUNIOR";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.055;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 5);
  }
`;

const StyledGreetingDiv = styled.div`
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLoginWrapper = styled.div`
  height: 500px;
  padding: 20px;
`;

class LoginPage extends Component {
  state = {
    isAccount: false
  };
  render() {
    return (
      <Wrapper>
        <StyledGreetingDiv>
          <StyledH1>Junior Start</StyledH1>
        </StyledGreetingDiv>
        <StyledLoginWrapper>
          {this.state.isAccount ? <LoginForm /> : <RegisterForm />}
        </StyledLoginWrapper>
      </Wrapper>
    );
  }
}

export default LoginPage;
