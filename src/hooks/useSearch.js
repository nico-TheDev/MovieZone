import useSWR from "swr";
import axios from "axios";

export default function useSearch(query, page = 1) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/search/${query}/${page}`, fetcher);

    const movies =
        data && data.results.filter((item) => item.media_type === "movie");
    const tvShows =
        data && data.results.filter((item) => item.media_type === "tv");

    return {
        data: { movies, tvShows },
        isLoading: !data && !error,
        isError: error,
        pageLimit: data,
    };
}
