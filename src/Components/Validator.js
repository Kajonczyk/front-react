export const validateRegister = (
  firstName,
  lastName,
  email,
  login,
  password,
  self
) => {
  let firstNameError = false;
  let lastNameError = false;
  let emailError = false;
  let loginError = false;
  let passwordError = false;
  if (
    firstName.length > 2 &&
    lastName.length > 2 &&
    (email.length > 5 && email.indexOf("@") !== -1) &&
    login.length > 5 &&
    password.length > 6
  ) {
    return true;
  } else {
    if (firstName.length < 2) {
      firstNameError = true;
    }

    if (lastName.length < 2) {
      lastNameError = true;
    }
    if (email.length < 5 && email.indexOf("@") === -1) {
      emailError = true;
    }
    if (login.length < 5) {
      loginError = true;
    }
    if (password.length < 6) {
      passwordError = true;
    }
    return self.setState({
      errors: {
        firstNameError,
        lastNameError,
        emailError,
        loginError,
        passwordError
      }
    });
  }
};
export const validateLogin = (login, password, self) => {
  let loginError = false;
  let passwordError = false;
  if (login.length > 5 && password.length > 6) {
    return true;
  } else {
    if (login.length < 5) {
      loginError = true;
    }
    if (password.length < 6) {
      passwordError = true;
    }
    return self.setState({
      errors: {
        loginError,
        passwordError
      }
    });
  }
};
