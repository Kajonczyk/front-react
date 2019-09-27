export const addRecruitmentFetch = (URL, payload, token) => {
  fetch(URL, {
    method: `POST`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: payload
  }).then(response => console.log(response.ok));
};
