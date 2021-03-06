import React, { Component } from "react";
import { StyledInput } from "../Shared/Input";
import { StyledSpanError } from "./Elements/SpanError";
import { validateRegister } from "./Validator";
import { authenticationFetch } from "../Fetches/AuthenticationFetch";
import { StatusMessage } from "./StatusMessage";
<<<<<<< HEAD

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
=======
import {
  StyledLoginP,
  StyledLoginBox,
  StyledButtonWrapper,
  StyledFormText,
  SubmitButton
} from "../Styles/RegisterFormStyle";
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5

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
    },
    isUserRegistered: false
  };
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  handleClosePopUp = () => {
    this.setState({
      isUserRegistered: false
    });
  };
  handleFormInputsClear = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: ""
    });
  };
  handleFormErrorsClear = () => {
    this.setState({
      errors: {
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        loginError: false,
        passwordError: false
      }
    });
  };
  handleFormClear = () => {
    this.handleFormInputsClear();
    this.handleFormErrorsClear();
  };
  validateForm = () => {
    let validatorHasErrors;
    const { firstName, lastName, email, login, password } = this.state;
    const validateRegisterForm = validateRegister(
      firstName,
      lastName,
      email,
      login,
      password
    );
    const isFormValidatedCorrectly = !Object.values(validateRegisterForm).some(
      Boolean
    );
    if (isFormValidatedCorrectly) {
      validatorHasErrors = false;
    } else {
      this.setState({
        errors: validateRegisterForm
      });
      validatorHasErrors = true;
    }
    return validatorHasErrors;
  };
  handleFetchResponse = responseStatus => {
    this.setState({
      isUserRegistered: responseStatus
    });
  };
  handleSubmit = async e => {
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

      const envURL = `Register`;
      const responseStatus = await authenticationFetch(envURL, obj);
      this.handleFetchResponse(responseStatus);
      this.handleFormClear();
    }
  };

  render() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      loginError,
      passwordError
    } = this.state.errors;
    const {
      firstName,
      lastName,
      email,
      login,
      password,
      isUserRegistered
    } = this.state;
    return (
      <>
        <StyledLoginBox>
          <StyledLoginP>Create your account</StyledLoginP>
          <StyledInput
            type="text"
            placeholder="First Name"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          {firstNameError ? (
            <StyledSpanError>First name is too short!</StyledSpanError>
          ) : null}

          <StyledInput
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          {lastNameError ? (
            <StyledSpanError>Last name is too short!</StyledSpanError>
          ) : null}

          <StyledInput
            type="email"
            placeholder="E-mail"
            id="email"
            onChange={this.handleChange}
            value={email}
          />
          {emailError ? (
            <StyledSpanError>Email address is not valid </StyledSpanError>
          ) : null}
          <StyledInput
            type="text"
            placeholder="Login"
            id="login"
            value={login}
            onChange={this.handleChange}
          />
          {loginError ? (
            <StyledSpanError>Login is too short!</StyledSpanError>
          ) : null}

          <StyledInput
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          {passwordError ? (
            <StyledSpanError>Password does not match the rules</StyledSpanError>
          ) : null}
          <StyledFormText onClick={this.props.switch}>
            Have an account already? Log in here
          </StyledFormText>
          <StyledButtonWrapper>
            <SubmitButton onClick={this.handleSubmit}>Create</SubmitButton>
          </StyledButtonWrapper>
          {isUserRegistered ? (
            <StatusMessage
              descriptionText="You were successfully registered!"
              closeAction={this.handleClosePopUp}
            />
          ) : null}
        </StyledLoginBox>
      </>
    );
  }
}

export default RegisterForm;
