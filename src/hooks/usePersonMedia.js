import useSWR from "swr";
import axios from "axios";

export default function usePersonMedia(id) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_KEY}&language=en-US`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/person/media/${id}`, fetcher);

    const media = data && data.cast.sort((a, b) => b.popularity - a.popularity);
    return {
        data:media,
        isLoading: !data && !error,
        hasError: error,
    };
}
