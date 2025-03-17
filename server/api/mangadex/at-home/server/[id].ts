import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const query = getQuery(event);

    if (!id) {
        return { error: "Manga ID is required" };
    }

    try {
        const response = await axios.get(`https://api.mangadex.org/at-home/server/${id}`)

        return response.data
    } catch (error) {
        console.error('Error fetching manga')
        return { error: 'Failed to fetch manga' };
    }
})