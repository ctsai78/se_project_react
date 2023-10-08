import { processServerResponse } from "./weatherApi";

const baseUrl = "http://localhost:3001";
// const baseUrl = "https://my-json-server.typicode.com/ctsai78/se_project_react";

const getItemList = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
};

const addItem = ({ name, imageUrl, weather, token }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(processServerResponse);
};

const removeItem = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

const removeCardLike = (id, user, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  }).then(processServerResponse);
};

const addCardLike = (id, user, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  }).then(processServerResponse);
};
const api = { getItemList, addItem, removeItem, removeCardLike, addCardLike };

export default api;
