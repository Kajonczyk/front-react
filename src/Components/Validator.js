export const validateRegister = (
  firstName,
  lastName,
  email,
  login,
  password
) => {
  const MIN_LENGTH = 3;
  const MIN_LOGIN_AND_PASSWORD_LENGTH = 6;

  return {
    firstNameError: firstName.length <= MIN_LENGTH,
    lastNameError: lastName.length <= MIN_LENGTH,
    emailError: email.length <= MIN_LENGTH || !email.includes("@"),
    loginError: login.length <= MIN_LOGIN_AND_PASSWORD_LENGTH,
    passwordError: password.length <= MIN_LOGIN_AND_PASSWORD_LENGTH
  };
};
export const validateLogin = (login, password) => {
  const MIN_LENGTH = 5;
  return {
    loginError: login.length < MIN_LENGTH,
    passwordError: password.length < MIN_LENGTH
  };
};
export const validateAddRecruitment = (
  companyName,
  cityName,
  positionName,
  applicationDate
) => {
  const MIN_LENGTH = 3;

  return {
    companyNameError: companyName.length <= MIN_LENGTH,
    cityNameError: cityName.length <= MIN_LENGTH,
    positionNameError: positionName.length <= MIN_LENGTH,
    applicationDateError: !Boolean(applicationDate)
  };
};
export const validateAddTask = taskName => {
  let nameError = true;
  if (taskName.length >= 1) {
    nameError = false;
  }
  return nameError;
};
