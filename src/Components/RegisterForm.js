import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./Elements/Input";
import { StyledButton } from "./Elements/Button";
import { validateRegister } from "./Validator";
import { authenticationFetch } from "../Fetches/AuthenticationFetch";

const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.s};
  padding-top: 10px;
  margin-bottom: 20px;
  margin-top: -50px;
  text-transform: uppercase;
`;

const StyledLoginBox = styled.div`
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
  color: ${({ theme }) => theme.lightgreen};
  text-decoration: underline;
  cursor: pointer;
  margin: 10px;
`;
const SubmitButton = styled(StyledButton)`
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
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  validateForm = () => {
    let validateHasErrors;
    const { firstName, lastName, email, login, password } = this.state;
    const validateRegisterForm = validateRegister(
      firstName,
      lastName,
      email,
      login,
      password
    );
    console.log(validateRegisterForm);
    if (typeof validateRegisterForm === "boolean") {
      validateHasErrors = false;
    } else {
      this.setState({
        errors: validateRegisterForm
      });
      validateHasErrors = true;
    }
    return validateHasErrors;
  };
  handleSubmit = e => {
    const { firstName, lastName, email, login, password } = this.state;
    e.preventDefault();
    const validatorHasErrors = this.validateForm();

    if (!validatorHasErrors) {
      const obj = {
        user: {
          id: 1, //API
          firstName,
          lastName,
          email,
          login,
          password
        }
      };

      const URL = `http://localhost:5001/Register`;
      authenticationFetch(URL, obj);
    }
  };
  render() {
    return (
      <StyledLoginBox>
        <StyledLoginP>Create your account</StyledLoginP>
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
          <SubmitButton onClick={this.handleSubmit}>Create</SubmitButton>
        </StyledButtonWrapper>
      </StyledLoginBox>
    );
  }
}

export default RegisterForm;
