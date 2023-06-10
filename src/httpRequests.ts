const token = localStorage.getItem("jwtAccess");

export const httpRequest = (path: string, method: string, body?: any) => {
  return fetch(path, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
      mode: "no-cors"
    },
    body: JSON.stringify(body),
  });
};
