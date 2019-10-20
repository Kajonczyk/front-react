export const validateRegister = (
  firstName,
  lastName,
  email,
  login,
  password
) => {
  let firstNameError = false;
  let lastNameError = false;
  let emailError = false;
  let loginError = false;
  let passwordError = false;
  if (
    firstName.length > 2 &&
    lastName.length > 2 &&
    (email.length > 5 && email.includes("@")) &&
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
    if (email.length < 5 || !email.includes("@")) {
      emailError = true;
    }
    if (login.length < 5) {
      loginError = true;
    }
    if (password.length < 6) {
      passwordError = true;
    }
    return {
      firstNameError,
      lastNameError,
      emailError,
      loginError,
      passwordError
    };
  }
};
export const validateLogin = (login, password) => {
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
    return {
      loginError,
      passwordError
    };
  }
};
export const validateAddRecruitment = (
  companyName,
  cityName,
  positionName,
  applicationDate
) => {
  let companyNameError = false;
  let cityNameError = false;
  let positionNameError = false;

  let applicationDateError = false;
  if (
    companyName.length > 3 &&
    cityName.length > 3 &&
    positionName.length > 3 &&
    applicationDate !== ""
  ) {
    return true;
  } else {
    if (companyName.length <= 3) {
      companyNameError = true;
    }
    if (cityName.length <= 3) {
      cityNameError = true;
    }
    if (positionName.length <= 3) {
      positionNameError = true;
    }
    if (applicationDate === "") {
      applicationDateError = true;
    }
    return [
      false,
      {
        companyNameError,
        cityNameError,
        positionNameError,
        applicationDateError
      }
    ];
  }
};
export const validateAddTask = taskName => {
  let nameError = true;
  if (taskName.length >= 1) {
    nameError = false;
  }
  return nameError;
};
