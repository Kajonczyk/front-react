export const addRecruitmentFetch = (payload, token) => {
  const baseURL = "http://localhost:5001/api/recruitment";
  fetch(baseURL, {
    method: `POST`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
};
