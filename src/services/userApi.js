import axios from "axios";

/* eslint-disable no-unused-vars */
const API_URL = "http://localhost:8080/backend";

export async function getRoles() {
  const res = await axios.get(`${API_URL}/role`);
  return res.data;
}

export async function createUser(userData, roleId) {
  const res = await axios.post(`${API_URL}/user/${roleId}`, userData);
  return res;
}

export async function createStore(data) {
  const res = await axios.post(`${API_URL}/store/2`, data);
  return res;
}
