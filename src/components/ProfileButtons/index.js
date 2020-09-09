import React, { useState, useEffect } from "react";

import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import { MovieButton, ButtonHolder } from "./styles";
import API from "api/moviedb.instance";
import { useAuth } from "contexts/AuthContext";

export default function ProfileButtons({ openTrailer, id, type }) {
    const media = type === "movie" ? "Movies" : "TV";
    const {
        state: { user, session, userMedia },
    } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isListed, setIsListed] = useState(false);

    const config = {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        params: {
            session_id: session?.session_id,
        },
    };

    const favoriteBody = {
        media_type: type,
        media_id: id,
        favorite: !isFavorite,
    };
    const listBody = {
        media_type: type,
        media_id: id,
        watchlist: !isListed,
    };

    useEffect(() => {
        const favorites =
            userMedia &&
            userMedia[`favorite${media}`].results.map((item) => item.id);
        const wannaWatch =
            userMedia &&
            userMedia[`watchList${media}`].results.map((item) => item.id);
        setIsFavorite(favorites?.includes(id));
        setIsListed(wannaWatch?.includes(id));
    }, [userMedia]);

    const markAsFavorite = () => {
        if (user) {
            API.post(`account/${user.id}/favorite`, favoriteBody, config).then(
                (res) => {
                    setIsFavorite(!isFavorite);
                }
            );
        }
    };

    const markAsListed = () => {
        if (user) {
            API.post(`account/${user.id}/watchlist`, listBody, config).then(
                (res) => {
                    setIsListed(!isListed);
                }
            );
        }
    };

    return (
        <ButtonHolder>
            <MovieButton onClick={markAsFavorite}>
                <Icon>
                    <use
                        href={getIcon(isFavorite ? "bookmark" : "bookmark-add")}
                    />
                </Icon>
                {isFavorite ? "Added" : "Add"} to Favorites
            </MovieButton>
            <MovieButton onClick={markAsListed}>
                <Icon>
                    <use href={getIcon(isListed ? "listed" : "list-add")} />
                </Icon>
                {isListed ? "Added" : "Add"} to Watchlist
            </MovieButton>
            <MovieButton onClick={openTrailer}>
                <Icon>
                    <use href={getIcon("play")} />
                </Icon>
                Watch Trailer
            </MovieButton>
        </ButtonHolder>
    );
}
