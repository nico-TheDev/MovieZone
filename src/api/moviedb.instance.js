import axios from "axios";

const moviedb = axios.create({
    timeout: 5000,
});

moviedb.interceptors.request.use((config) => {
    config.baseURL = process.env.REACT_APP_API;
    config.params = config.params || {};
    config.params["api_key"] = process.env.REACT_APP_KEY;
    config.params["language"] = "en-US";
    return config;
});

export default moviedb;
