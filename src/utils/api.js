// const baseUrl = "http://localhost:3001";
const baseUrl = "https://my-json-server.typicode.com/ctsai78/se_project_react";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: $res.status`);
};

const getItemList = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleServerResponse);
};

const removeItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const api = { getItemList, addItem, removeItem };

export default api;
