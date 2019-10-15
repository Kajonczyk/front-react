export const AddNewToDoList = (payload, token) => {
  const obj = {
    id: 1,
    name: payload,
    tasks: [],
    ownerId: 1,
    status: true
  };
  fetch("http://localhost:5001/api/todolists/todolist", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then(res => console.log(res, res.status, obj));
};
