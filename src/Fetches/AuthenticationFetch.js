import { fetchWithMethodPostTemplate } from "./fetchTemplates";
export const authenticationFetch = async (URL, payload) => {
  const response = await fetchWithMethodPostTemplate(payload, URL);
  const status = response.ok;
  const data = await response.json();
  localStorage.setItem("token", data);
  return status;
};
