import { fetchRequestBody } from "./fetchTemplates";

export const updateRecruitmentFetch = async (payload, id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}recruitment/${id}`,
    fetchRequestBody("PUT", payload)
  );
  return response.json();
};
