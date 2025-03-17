import axios from 'axios';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const id = getRouterParam(event, 'id')
    
    if (!id) {
        throw new Error("Manga ID is required");
    }

    const response = await axios.get(`https://api.mangadex.org/manga/${id}`, {
        params: query
    });

    return response.data;
});
