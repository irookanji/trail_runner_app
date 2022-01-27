import axios from 'axios';

export async function getProducts() {
  const response = await axios.get('https://www.mockachino.com/f74be42c-0725-47/products');
  return await response.data.products;
}
