import { fetchRequestBody } from "../fetchTemplates";

export const deleteToDoList = async payload => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}todolists/${payload.id}`,
    fetchRequestBody("DELETE", payload)
  );
  return response.text();
};
