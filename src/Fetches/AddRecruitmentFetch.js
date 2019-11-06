import { fetchWithMethodPostTemplate } from "./fetchTemplates";
export const addRecruitmentFetch = payload => {
  const baseURL = "http://localhost:5001/api/recruitment";
  fetchWithMethodPostTemplate(payload, baseURL);
};
