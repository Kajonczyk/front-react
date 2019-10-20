export const authenticationFetch = async (URL, payload) => {
  const response = await fetch(URL, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const status = response.ok;
  const data = await response.json();
  localStorage.setItem("token", data);
  return status;
};
