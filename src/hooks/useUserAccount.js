import axios from "axios";
import useSWR from "swr";
import API from "../api/moviedb.instance";

export default function useUserAccount(session) {
    const config = {
        params: {
            session_id: session?.session_id,
        },
    };
    const mediaConfig = {
        params: {
            session_id: session?.session_id,
            sort_by: "created_at.desc",
        },
    };

    const detailsFetcher = () =>
        API.get("account", config).then((res) => res.data);

    const { data: userData } = useSWR(
        () => (session.session_id ? `api/account/` : null),
        detailsFetcher
    );

    const getFavoriteMovies = API.get(
            `account/${userData?.id}/favorite/movies`,
            mediaConfig
        ),
        getFavoriteTV = API.get(
            `account/${userData?.id}/favorite/tv`,
            mediaConfig
        ),
        getRatedMovies = API.get(
            `account/${userData?.id}/rated/movies`,
            mediaConfig
        ),
        getRatedTV = API.get(`account/${userData?.id}/rated/tv`, mediaConfig),
        getWatchListMovie = API.get(
            `account/${userData?.id}/watchlist/movies`,
            mediaConfig
        ),
        getWatchListTV = API.get(
            `account/${userData?.id}/watchlist/tv`,
            mediaConfig
        );

    const requests = [
        getFavoriteMovies,
        getFavoriteTV,
        getRatedMovies,
        getRatedTV,
        getWatchListMovie,
        getWatchListTV,
    ];

    const mediaFetcher = () =>
        axios.all(requests).then(
            axios.spread((...responses) => ({
                favoriteMovies: responses[0].data,
                favoriteTV: responses[1].data,
                ratedMovies: responses[2].data,
                ratedTV: responses[3].data,
                watchListMovies: responses[4].data,
                watchListTV: responses[5].data,
            }))
        );

    const { data: userMedia, error, mutate } = useSWR(
        () => (userData ? `api/user/media` : null),
        mediaFetcher
    );

    return {
        isLoading: !userData && !userMedia,
        data: {
            user: userData,
            media: userMedia,
        },
        hasError: error,
        mutate,
    };
}
