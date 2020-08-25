import useSWR from "swr";
import axios from "axios";

export default function useGenre(page = 1, id, type) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_KEY}&language=en-US&with_genres=${id}&page=${page}`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/${type}/genre/${id}/${page}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}
