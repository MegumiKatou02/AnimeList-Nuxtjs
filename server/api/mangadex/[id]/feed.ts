import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const mangaId = getRouterParam(event, 'id')
    const query = getQuery(event);

    if (!mangaId) {
        return { error: "Manga ID is required" };
    }

    try {
        const response = await axios.get(`https://api.mangadex.org/manga/${mangaId}/feed`, {
            params: query
        })

        return response.data
    } catch (error) {
        console.error('Error fetching manga')
        return { error: 'Failed to fetch manga' };
    }
})