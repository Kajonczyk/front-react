export const deleteRecruitmentFetch = (payload, token, id) => {
  const baseURL = `http://localhost:5001/api/recruitment/${id}`;
  fetch(baseURL, {
    method: `DELETE`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.text());
};
