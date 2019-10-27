export const addNewToDoList = (payload, token) => {
  const obj = {
    id: 1,
    name: payload,
    tasks: [],
    ownerId: 1,
    status: true
  };
  const baseURL = "http://localhost:5001/api/todolists/todolist";
  fetch(baseURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  });
};
