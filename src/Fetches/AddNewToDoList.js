import { fetchWithMethodPostTemplate } from "./fetchTemplates";
export const addNewToDoList = payload => {
  const obj = {
    id: 1,
    name: payload,
    tasks: [],
    ownerId: 1,
    status: true
  };
  const baseURL = "http://localhost:5001/api/todolists/todolist";
  fetchWithMethodPostTemplate(obj, baseURL);
};
