import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useGetCasts(id, type) {
    const fetcher = () =>
        API.get(`${type}/${id}/credits`).then((res) => res.data);
    const { data, error } = useSWR(`/api/cast/${type}/${id}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
