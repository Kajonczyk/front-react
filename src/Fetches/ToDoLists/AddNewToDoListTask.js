import { fetchRequestBody } from "../fetchTemplates";

export const addNewToDoListTask = payload => {
  const response = fetch(
    `${process.env.REACT_APP_API_URL}todolists/task`,
    fetchRequestBody("POST", payload)
  );
};
