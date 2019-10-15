export const addRecruitmentFetch = (payload, token) => {
  fetch("http://localhost:5001/api/recruitment", {
    method: `POST`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
};
