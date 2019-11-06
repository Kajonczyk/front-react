export const fetchWithMethodPostTemplate = (payload, baseURL) => {
  const token = localStorage.getItem("token");

  const response = fetch(baseURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return response;
};
export const fetchWithMethodGetTemplate = async baseURL => {
  const token = localStorage.getItem("token");
  const response = await fetch(baseURL, {
    method: `GET`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
};
