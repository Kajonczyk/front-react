export const getRecruitmentFetch = (URL, token, recruitments) => {
  fetch(URL, {
    method: `GET`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => recruitments.push(data));
};
