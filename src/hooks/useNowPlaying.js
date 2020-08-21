import useSWR from "swr";
import axios from "axios";

export default function useNowPlaying() {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
            )
            .then((res) => res.data);

    const { data, error } = useSWR("/api/nowplaying", fetcher);
    return {
        data: data,
        isLoading: !data && !error,
        isError: error,
    };
}
