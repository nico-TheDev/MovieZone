import useSWR from "swr";
import axios from "axios";

export default function usePopularMovies(page = 1) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/popular/movie/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}
