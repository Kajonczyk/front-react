import { fetchRequestBody } from "./fetchTemplates";
export const addNewToDoList = payload => {
  const obj = {
    id: 1,
    name: payload,
    tasks: [],
    ownerId: 1,
    status: true
  };
<<<<<<< HEAD
  const baseURL = "http://localhost:5001/api/todolists/todolist";
  fetch(baseURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  });
=======
  const response = fetch(
    `${process.env.REACT_APP_API_URL}todolists/todolist`,
    fetchRequestBody("POST", obj)
  );
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5
};
