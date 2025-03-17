import { defineEventHandler, getRouterParam } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id'); 

    if (!id) {
        throw new Error("Manga ID is required");
    }

    const response = await axios.get(`https://api.mangadex.org/statistics/manga/${id}`);

    return response.data;
});
