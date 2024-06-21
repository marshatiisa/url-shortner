import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const shortenUrl = async (longUrl: string) => {
  const response = await axios.post(`${API_BASE_URL}/shorten`, { url: longUrl });
  return response.data;
};
