import axios from "axios";

const moviedb = axios.create();

moviedb.interceptors.request.use((config) => {
    config.baseURL = import.meta.env.VITE_API;
    config.params = config.params || {};
    config.params["api_key"] = import.meta.env.VITE_KEY;
    config.params["language"] = "en-US";
    return config;
});

export default moviedb;
