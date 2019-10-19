export const browseToDoLists = async token => {
  const baseURL = "http://localhost:5001/api/todolists";
  const response = await fetch(baseURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
};
