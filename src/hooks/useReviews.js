import useSWR from "swr";
import axios from "axios";

export default function useReviews(id, type) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/${type}/review/${id}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}
