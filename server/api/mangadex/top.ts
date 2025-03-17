import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const response = await axios.get('https://api.mangadex.org/manga', {
        params: query
    });

    return response.data;
});
