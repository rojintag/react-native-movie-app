import axios from "axios";


const API_KEY = '575e8dfa82901be603d23fd367611739'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getMovies = async (type, page) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${type}?api_key=${API_KEY}&page=${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getShowDetails = async (itemId, type) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/${type}/${itemId}?api_key=${API_KEY}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTV = async (type, page) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/tv/${type}?api_key=${API_KEY}&page=${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getSearchResults = async (query, type, page) => {

    const url = `${BASE_URL}/search/${type}?query=${query}&api_key=${API_KEY}&page=${page}`

    console.log(url)

    try {
        const response = await axios.get(
            `${BASE_URL}/search/${type}?query=${query}&api_key=${API_KEY}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};