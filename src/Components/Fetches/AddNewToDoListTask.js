export const AddNewToDoListTask = (payload, token) => {
  const baseURL = "http://localhost:5001/api/todolists/task";
  fetch(baseURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
};
