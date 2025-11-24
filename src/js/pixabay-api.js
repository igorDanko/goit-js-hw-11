import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY =
  import.meta.env.VITE_PIXABAY_API_KEY ?? '53385937-8a0c221ff814c7201da219fcf';

const pixabayClient = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  },
});

export function getImagesByQuery(query) {
  return pixabayClient
    .get('', {
      params: {
        q: query,
      },
    })
    .then(response => response.data);
}
