import useSWR from "swr";
import axios from "axios";

export default function useGetCasts(id, type) {
    const fetcher = () =>
        axios
            .get(
                `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US`
            )
            .then((res) => res.data);

    const { data, error } = useSWR(`/api/cast/${type}/${id}`, fetcher);

    console.log(data);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}
