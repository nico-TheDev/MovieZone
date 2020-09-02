import React from "react";
import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import { MovieButton, ButtonHolder } from "./styles";

export default function ProfileButtons({
    openTrailer,
    favList,
    watchList,
    id,
}) {
    const favID = favList?.map((item) => item.id);
    const watchID = watchList?.map((item) => item.id);

    return (
        <ButtonHolder>
            <MovieButton>
                <Icon>
                    <use
                        href={getIcon(
                            favID?.includes(id) ? "bookmark" : "bookmark-add"
                        )}
                    />
                </Icon>
                {favID?.includes(id) ? "Added" : "Add"} to Favorites
            </MovieButton>
            <MovieButton>
                <Icon>
                    <use
                        href={getIcon(
                            watchID?.includes(id) ? "listed" : "list-add"
                        )}
                    />
                </Icon>
                {watchID?.includes(id) ? "Added" : "Add"} to Watchlist
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
