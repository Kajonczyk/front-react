export const authenticationFetch = (URL, payload) => {
  fetch(URL, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json"
    },
    body: payload
  }).then(response => console.log(response.ok));
};
