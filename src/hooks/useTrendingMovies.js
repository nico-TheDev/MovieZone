import useSWR from "swr";
import axios from "axios";

export default function useTrendingMovies(page = 1) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/trending/${page}`, fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        hasError: error,
        
    };
}
