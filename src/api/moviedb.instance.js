import axios from "axios";

const config = {
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: process.env.REACT_APP_KEY,
        language: "en-US",
    },
};

const moviedb = axios.create(config);

export default moviedb;
