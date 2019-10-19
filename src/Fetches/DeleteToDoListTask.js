export const deleteToDoListTask = (payload, token, id) => {
  const baseURL = `http://localhost:5001/api/todolists/task/${id}`;
  fetch(baseURL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.text());
};
