/* eslint-disable no-return-await */
import axios from 'axios';

export async function getProducts() {
  const response = await axios.get('https://www.mockachino.com/f74be42c-0725-47/products');
  return await response.data.products;
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
