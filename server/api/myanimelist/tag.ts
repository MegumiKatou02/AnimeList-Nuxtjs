import axios from 'axios';

export default defineEventHandler(async () => {
  const response = await axios.get('https://api.jikan.moe/v4/genres/anime');
  
  return response.data;
});
