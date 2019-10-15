const BrowseToDoLists = async token => {
  const response = await fetch("http://localhost:5001/api/todolists", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
};
export default BrowseToDoLists;
