import axios from 'axios';
const baseUrl = 'http://localhost:3003/twitter';

const getAllTrendingTags = () => {
  const request = axios.get(`${baseUrl}/trending`);
  return request.then(response => response.data);
};

const getTweetsByTag = (topic) => {
  const request = axios.get(`${baseUrl}/tweets/${topic}`);
  return request.then(response => response.data);
};

export default { getAllTrendingTags, getTweetsByTag };