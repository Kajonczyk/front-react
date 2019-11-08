import { fetchRequestBody } from "./fetchTemplates";

export const browseToDoLists = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}todolists`,
    fetchRequestBody("GET")
  );
  return await response.json();
};
