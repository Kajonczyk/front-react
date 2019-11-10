export const fetchRequestBody = (methodType, payload) => {
  const token = localStorage.getItem("token");
  const requestBody = {
    method: methodType,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  return Boolean(payload)
    ? { ...requestBody, body: JSON.stringify(payload) }
    : requestBody;
};
