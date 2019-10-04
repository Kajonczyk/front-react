export const getRecruitmentFetch = (token, self) => {
  fetch("http://localhost:5001/api/recruitment", {
    method: `GET`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(async response => await response.json())
    .then(data => self.setState({ recruitments: data }));
};
