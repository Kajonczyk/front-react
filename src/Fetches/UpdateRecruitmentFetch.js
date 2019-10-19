export const updateRecruitmentFetch = (payload, token, id) => {
  fetch(`http://localhost:5001/api/recruitment/${id}`, {
    method: `PUT`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.json());
};
