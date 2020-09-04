import React, { useState, useContext } from "react";

import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import { MovieButton, ButtonHolder } from "./styles";
import API from "api/moviedb.instance";


export default function ProfileButtons({
    openTrailer,
    favList,
    watchList,
    id,
    type,
}) {

    // const config = {
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //     },
    //     params: {
    //         session_id: session?.session_id,
    //     },
    // };

    // const favoriteBody = {
    //     media_type: type,
    //     media_id: id,
    //     favorite: !isFavorite,
    // };
    // const listBody = {
    //     media_type: type,
    //     media_id: id,
    //     watchlist: !isListed,
    // };

    // const markAsFavorite = () => {
    //     if (user) {
    //         API.post(`account/${user.id}/favorite`, favoriteBody, config).then(
    //             (res) => {
    //                 setIsFavorite(!isFavorite);
    //             }
    //         );
    //     }
    // };

    // const markAsListed = () => {
    //     if (user) {
    //         API.post(`account/${user.id}/watchlist`, listBody, config).then(
    //             (res) => {
    //                 setIsListed(!isListed);
    //             }
    //         );
    //     }
    // };
    const markAsFavorite = () => console.log('added to favorites')
    const markAsListed = () => console.log('added to list')

    const [isFavorite,isListed] = [false,false];

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
