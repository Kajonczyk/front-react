import React, { Component } from "react";
import { StyledInput } from "../Shared/Input";
import { StyledButton } from "../Shared/Button";
import { validateLogin } from "./Validator";
import { authenticationFetch } from "../Fetches/AuthenticationFetch";
import { StyledSpanError } from "./Elements/SpanError";
import {
  StyledLoginP,
  StyledLoginBox,
  StyledButtonWrapper,
  StyledFormText
} from "../Styles/LoginFormStyle";

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
  clearFormInputs = () => {
    this.setState({
      login: "",
      password: ""
    });
  };
  clearFormErrors = () => {
    this.setState({
      errors: {
        loginError: false,
        passwordError: false
      }
    });
  };
  clearForm = () => {
    this.clearFormInputs();
    this.clearFormErrors();
  };
  validateForm = (login, password) => {
    let validatorHasErrors;
    const validateLoginForm = validateLogin(login, password);
    const isFormValidatedCorrectly = !Object.values(validateLoginForm).some(
      Boolean
    );
    if (isFormValidatedCorrectly) {
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
    e.preventDefault();
    const { login, password } = this.state;
    const validatorHasErrors = this.validateForm(login, password);
    if (!validatorHasErrors) {
      const obj = {
        login,
        password
      };
      const envURL = `Login`;
      const responseStatus = await authenticationFetch(envURL, obj);
      if (responseStatus) {
        this.props.history.push("/user");
        this.clearForm();
      } else {
        this.setState({
          validateError: true,
          errors: {
            loginError: false,
            passwordError: false
          }
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
