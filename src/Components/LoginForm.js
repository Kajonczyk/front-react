import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import { StyledInput } from "./StyledComponents/Input";
import { StyledButton } from "./StyledComponents/Button";
import * as validator from "./Validator";
import * as AuthenticationFetch from "./Fetches/AuthenticationFetch";
const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.formMobile};
  padding-top: 10px;
  margin-bottom: 20px;
`;

const StyledLoginBox = styled.div`
  // background-color: ${({ theme }) => theme.lightgreen};
  // box-shadow: 0px 0px 4px ${({ theme }) => theme.lightgreen};
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
  color: ${({ theme }) => theme.lightgreen};
  text-decoration: underline;
  cursor: pointer;
  margin: 10px;
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
    password: "",
    errors: {
      loginError: false,
      passwordError: false
    }
  };
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  validateForm = (login, password) => {
    return validator.validateLogin(login, password, this);
  };

  handleSubmit = e => {
    const { login, password } = this.state;
    e.preventDefault();
    const validatorHasNoErrors = this.validateForm(login, password);
    if (validatorHasNoErrors) {
      const obj = {
        login,
        password
      };
      const URL = `http://localhost:5001/Login`;
      AuthenticationFetch.authenticationFetch(URL, obj);
    }
  };
  render() {
    return (
      <StyledLoginBox active={this.props.active}>
        <StyledLoginP>LOG IN</StyledLoginP>
        <StyledInput
          type="text"
          placeholder="Login"
          id="login"
          value={this.state.login}
          onChange={this.handleChange}
        />

        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <StyledFormText onClick={this.props.switch}>
          Dont have an account? Register here!
        </StyledFormText>
        <StyledButtonWrapper>
          <StyledButton onClick={this.handleSubmit}>Create</StyledButton>
        </StyledButtonWrapper>
      </StyledLoginBox>
    );
  }
}

export default LoginForm;
