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
};
