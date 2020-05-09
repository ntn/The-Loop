import axios from 'axios';
const baseUrl = 'http://localhost:3003/twitter';

const getAll = () => {
  const request = axios.get(`${baseUrl}/trending`);
  return request.then(response => response.data);
};

export default { getAll };