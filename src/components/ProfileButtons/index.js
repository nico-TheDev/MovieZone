import React from "react";
import Icon from 'components/shared/Icon';
import getIcon from 'util/getIcon';
import { MovieButton , ButtonHolder } from './styles';

export default function ProfileButtons({ openTrailer }) {
    return (
        <ButtonHolder>
            <MovieButton>
                <Icon>
                    <use href={getIcon("bookmark-add")} />
                </Icon>
                Add to Favorites
            </MovieButton>
            <MovieButton>
                <Icon>
                    <use href={getIcon("list-add")} />
                </Icon>
                Add to Watchlist
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
