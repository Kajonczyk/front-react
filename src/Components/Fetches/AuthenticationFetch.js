export const authenticationFetch = (URL, payload) => {
  fetch(URL, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(data => localStorage.setItem("token", data));
};
