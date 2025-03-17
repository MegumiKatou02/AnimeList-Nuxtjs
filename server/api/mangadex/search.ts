import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';


// search and filter
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    try {
        const response = await axios.get(`https://api.mangadex.org/manga`, {
            params: query
        })

        return response.data
    } catch (error) {
        console.error('Error fetching search manga')
        return { error: 'Failed to fetch search manga' };
    }
})