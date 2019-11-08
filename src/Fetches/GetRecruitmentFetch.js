import { fetchRequestBody } from "./fetchTemplates";

export const getRecruitmentFetch = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}recruitment`,
    fetchRequestBody("GET")
  );
  return await response.json();
};
