import useSWR from "swr";
import API from "api/moviedb.instance";

export default function useDetails(id,type) {
    const fetcher = () => API.get(`${type}/${id}`).then(res => res.data);
    const { data, error } = useSWR(`/api/${type}/${id}`, fetcher);
    return {
        data,
        isLoading: !data && !error,
        hasError: error,
    };
}
