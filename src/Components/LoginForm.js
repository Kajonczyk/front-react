import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import { StyledInput } from "./Elements/Input";
import { StyledButton } from "./Elements/Button";
import { validateLogin } from "./Validator";
import { authenticationFetch } from "../Fetches/AuthenticationFetch";
import { StyledSpanError } from "./Elements/SpanError";

const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.formMobile};
  padding-top: 10px;
  margin-bottom: 20px;
`;

const StyledLoginBox = styled.div`
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
    },
    validateError: false
  };
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  handleFormInputsClear = () => {
    this.setState({
      login: "",
      password: ""
    });
  };
  handleFormErrorsClear = () => {
    this.setState({
      errors: {
        loginError: false,
        passwordError: false
      }
    });
  };
  handleFormClear = () => {
    this.handleFormInputsClear();
    this.handleFormErrorsClear();
  };
  validateForm = (login, password) => {
    let validatorHasErrors;
    const validateLoginForm = validateLogin(login, password);
    if (typeof validateLoginForm === "boolean") {
      validatorHasErrors = false;
    } else {
      this.setState({
        errors: validateLoginForm
      });
      validatorHasErrors = true;
    }
    return validatorHasErrors;
  };

  handleSubmit = async e => {
    const { login, password } = this.state;
    e.preventDefault();
    const validatorHasErrors = this.validateForm(login, password);
    if (!validatorHasErrors) {
      const obj = {
        login,
        password
      };
      const URL = `http://localhost:5001/Login`;
      const responseStatus = await authenticationFetch(URL, obj);
      if (responseStatus) {
        this.props.history.push("/user");
        this.handleFormClear();
      } else {
        this.setState({
          validateError: true
        });
      }
    }
  };
  render() {
    const { loginError, passwordError } = this.state.errors;
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
        {loginError ? (
          <StyledSpanError>Login is too short!</StyledSpanError>
        ) : null}

        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        {passwordError ? (
          <StyledSpanError>Password doesn't match the rules</StyledSpanError>
        ) : null}
        {this.state.validateError ? (
          <StyledSpanError>Incorrect username or password</StyledSpanError>
        ) : null}
        <StyledFormText onClick={this.props.switch}>
          Dont have an account? Register here!
        </StyledFormText>
        <StyledButtonWrapper>
          <StyledButton onClick={this.handleSubmit}>Log In</StyledButton>
        </StyledButtonWrapper>
      </StyledLoginBox>
    );
  }
}

export default LoginForm;
