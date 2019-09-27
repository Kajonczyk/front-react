export const authenticationFetch = (URL, payload) => {
  fetch(URL, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json"
    },
    body: payload
  })
    .then(response => response.json())
    .then(data => localStorage.setItem("token", data));
};
