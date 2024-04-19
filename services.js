import axios from "axios";

//URL : http://IP ADRESS:Port/endpoints
const API_URL = "http://192.168.8.107:8082/users";

export async function addUser(user) {
  return await axios.post(`${API_URL}/add`, user);
}
export async function getAllUsers() {
  return await axios.get(`${API_URL}/getAll`);
}

export async function getUserById(id) {
  return await axios.get(`${API_URL}/get/${id}`);
}

export async function deleteUser(id) {
  return await axios.delete(`${API_URL}/delete/${id}`);
}
