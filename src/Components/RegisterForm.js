import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";
import { StyledButton } from "./Button";
import * as validator from "./Validator";
import * as Fetch from "./Fetch";

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
const Button = styled(StyledButton)`
  margin-bottom: -20px;
`;
class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    login: "",
    password: "",
    errors: {
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      loginError: false,
      passwordError: false
    }
  };
  handleChange = e => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState({
      [type]: value
    });
  };

  handleSubmit = e => {
    const { firstName, lastName, email, login, password } = this.state;
    e.preventDefault();

    if (
      validator.validateRegister(
        firstName,
        lastName,
        email,
        login,
        password,
        this
      )
    ) {
      const obj = {
        user: {
          id: 1,
          firstName: firstName,
          lastName: lastName,
          email: email,
          login: login,
          password: password
        }
      };
      const objJSON = JSON.stringify(obj);

      const URL = `http://localhost:5001/Register`;
      Fetch.authenticationFetch(URL, objJSON);
    }
  };
  render() {
    return (
      <StyledLoginBox>
        <StyledLoginP>CREATE YOUR ACCOUNT</StyledLoginP>
        <StyledInput
          type="text"
          placeholder="First Name"
          id="firstName"
          onChange={this.handleChange}
        />

        <StyledInput
          type="text"
          placeholder="Last Name"
          id="lastName"
          onChange={this.handleChange}
        />

        <StyledInput
          type="email"
          placeholder="E-mail"
          id="email"
          onChange={this.handleChange}
        />
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
          Have an account already? Log in here
        </StyledFormText>
        <StyledButtonWrapper>
          <Button onClick={this.handleSubmit}>Create</Button>
        </StyledButtonWrapper>
      </StyledLoginBox>
    );
  }
}

export default RegisterForm;
