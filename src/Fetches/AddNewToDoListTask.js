import { fetchWithMethodPostTemplate } from "./fetchTemplates";
export const addNewToDoListTask = payload => {
  const baseURL = "http://localhost:5001/api/todolists/task";
  fetchWithMethodPostTemplate(payload, baseURL);
};
