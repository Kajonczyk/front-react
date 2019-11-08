import { fetchRequestBody } from "./fetchTemplates";
export const addNewToDoList = payload => {
  const obj = {
    id: 1,
    name: payload,
    tasks: [],
    ownerId: 1,
    status: true
  };
  const response = fetch(
    `${process.env.REACT_APP_API_URL}todolists/todolist`,
    fetchRequestBody("POST", obj)
  );
};
