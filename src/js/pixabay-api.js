import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53601534-4242f4726582a914ce6310b57'; 
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };


  return axios.get(BASE_URL, { params }).then(response => response.data);
}