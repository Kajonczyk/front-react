export const addNewToDoListTask = payload => {
  const baseURL = "http://localhost:5001/api/todolists/task";
  const token = localStorage.getItem("token");
  fetch(baseURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
};
