import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const query = getQuery(event);

    if (!id) {
        return { error: "Chapter ID is required" };
    }

    try {
        const response = await axios.get(`https://api.mangadex.org/chapter/${id}`, {
            params: query
        })

        return response.data
    } catch (error) {
        console.error('Error fetching chapter manga')
        return { error: 'Failed to fetch chapter manga' };
    }
})