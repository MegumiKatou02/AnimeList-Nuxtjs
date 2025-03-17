import axios from 'axios';

export default defineEventHandler(async () => {
  const response = await axios.get('https://api.mangadex.org/manga/tag');
  
  return response.data;
});
