import { fetchRequestBody } from "../fetchTemplates";
export const addRecruitmentFetch = payload => {
  const response = fetch(
    `${process.env.REACT_APP_API_URL}recruitment`,
    fetchRequestBody("POST", payload)
  );
};
