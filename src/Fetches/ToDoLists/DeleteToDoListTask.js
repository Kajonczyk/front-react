import { fetchRequestBody } from "../fetchTemplates";

export const deleteToDoListTask = async (payload, id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}todolists/task/${id}`,
    fetchRequestBody("DELETE", payload)
  );
  return response.text();
};
