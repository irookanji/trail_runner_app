import axios from 'axios';

export async function getProducts() {
  const response = await axios.get('https://albrds.herokuapp.com/api/products');
  return response.data;
}

export async function badReq() {
  await axios
    .post(
      'https://www.mockachino.com/f74be42c-0725-47/bad-request',
      {
        username: 'api',
        password: 'MY_PASSWORD',
        grant_type: 'MY_GRANT_TYPE',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      },
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
}

export async function addProduct(data: any) {
  const response = await axios.post('https://albrds.herokuapp.com/api/products', data);
  return response.data;
}

export async function getAllProducts() {
  const response = await axios.get('https://albrds.herokuapp.com/api/products');
  return response.data;
}

export async function deleteProduct(data: any) {
  const response = await axios.delete(`https://albrds.herokuapp.com/api/products/${data}`);
  return response.data;
}

export async function getProduct(data: any) {
  const response = await axios.get(`https://albrds.herokuapp.com/api/products/${data}`);
  return response.data;
}

export async function updateProduct(id: string | undefined, data: any) {
  const response = await axios.put(`https://albrds.herokuapp.com/api/products/${id}`, data);
  return response.data;
}
