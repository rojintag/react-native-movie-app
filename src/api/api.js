import axios from "axios";

export const getMovies = async (type, page) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${type}?api_key=575e8dfa82901be603d23fd367611739&page=${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getShowDetails = async (itemId, type) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/${type}/${itemId}?api_key=575e8dfa82901be603d23fd367611739`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTV = async (type, page) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/tv/${type}?api_key=575e8dfa82901be603d23fd367611739&page=${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getSearch = async (query, type, page) => {

    const url = `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${API_KEY}&page=${page}`

    console.log(url)

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=575e8dfa82901be603d23fd367611739`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

