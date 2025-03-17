import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';

const BASE_URL = 'https://api.myanimelist.net/v2';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  
  try {
    const response = await axios.get(`${BASE_URL}/anime`, {
      headers: { 'X-MAL-CLIENT-ID': config.MAL_CLIENT_ID },
      params: query,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching anime ranking:', error);
    return { error: 'Failed to fetch anime ranking' };
  }
});
