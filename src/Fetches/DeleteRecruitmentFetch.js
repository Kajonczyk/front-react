import { fetchRequestBody } from "./fetchTemplates";

export const deleteRecruitmentFetch = async (payload, id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}recruitment/${id}`,
    fetchRequestBody("DELETE", payload)
  );
  return response.text();
};
