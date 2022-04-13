import axios from 'axios';

const url = 'https://albrds.herokuapp.com';
// const url = 'http://localhost:8080';

export async function getProducts() {
  const response = await axios.get(`${url}/api/products`);
  return response.data;
}

export async function addProduct(data: any) {
  const response = await axios.post(`${url}/api/products`, data);
  return response.data;
}

export async function getAllProducts() {
  const response = await axios.get(`${url}/api/products`);
  return response.data;
}

export async function deleteProduct(data: any) {
  const response = await axios.delete(`${url}/api/products/${data}`);
  return response.data;
}

export async function getProduct(data: any) {
  const response = await axios.get(`${url}/api/products/${data}`);
  return response.data;
}

export async function updateProduct(id: string | undefined, data: any) {
  const response = await axios.put(`${url}/api/products/${id}`, data);
  return response.data;
}

export async function login(username: string, password: string) {
  const response = await axios.post(`${url}/api/user/login`, { username, password });
  return response.data;
}

export async function getUserData() {
  const response = await axios.get(`${url}/api/user/getUsername`, {
    headers: {
      'x-access-token': localStorage.getItem('token') as any,
    },
  });
  return response.data;
}

export async function addNewUser(data: any) {
  const response = await axios.post(`${url}/api/user/register`, data);
  return response.data;
}
