export const deleteToDoList = payload => {
  const baseURL = `http://localhost:5001/api/todolists/${payload.id}`;
  const token = localStorage.getItem("token");
  fetch(baseURL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => response.text());
};
