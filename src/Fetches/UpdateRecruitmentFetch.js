<<<<<<< HEAD
export const updateRecruitmentFetch = (payload, token, id) => {
  const baseURL = `http://localhost:5001/api/recruitment/${id}`;
  fetch(baseURL, {
    method: `PUT`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.json());
=======
import { fetchRequestBody } from "./fetchTemplates";

export const updateRecruitmentFetch = async (payload, id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}recruitment/${id}`,
    fetchRequestBody("PUT", payload)
  );
  return response.json();
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5
};
