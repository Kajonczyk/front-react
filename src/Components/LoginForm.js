import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
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
  transition: all 1s 1s;
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

const fadeIn = keyframes`
from{
  transform:translateX(40px);
  opacity:0;
}
to{
  transform:translateX(0px);
  opacity:1;
}
`;
class LoginForm extends Component {
  state = {
    login: "",
    password: ""
  };
  handleChange = e => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState({
      [type]: value
    });
  };
  render() {
    return (
      <StyledLoginBox active={this.props.active}>
        <StyledLoginP>LOG IN</StyledLoginP>
        <StyledInput
          type="text"
          placeholder="Login"
          id="login"
          onChange={this.handleChange}
        />

        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          onChange={this.handleChange}
        />
        <StyledFormText onClick={this.props.switch}>
          Dont have an account? Register here!
        </StyledFormText>
        <StyledButtonWrapper>
          <StyledButton>Create</StyledButton>
        </StyledButtonWrapper>
      </StyledLoginBox>
    );
  }
}

export default LoginForm;
// // ${props =>
// props.active
// ? `animation: ${css`
//     ${fadeIn} 3s ease infinite
//   `}`
// : "transform: translateX(100px); opacity: 0"}
