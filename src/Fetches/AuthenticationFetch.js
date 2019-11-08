import { fetchRequestBody } from "./fetchTemplates";
export const authenticationFetch = async (URL, payload) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_AUTHENTICATION_URL}${URL}`,
    fetchRequestBody("POST", payload)
  );
  const status = response.ok;
  const data = await response.json();
  localStorage.setItem("token", data);
  return status;
};
