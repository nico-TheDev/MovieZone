import useSWR from "swr";
import axios from "axios";

export default function useUpcomingMovies(page = 1) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/upcoming/${page}`, fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        hasError: error,
    };
}
