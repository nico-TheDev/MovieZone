import useSWR from "swr";
import axios from "axios";

export default function useRecommendations(id, type) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/${type}/recommendations/${id}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
