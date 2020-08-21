import React from "react";
import { Link } from "react-router-dom";

import Icon from "../shared/Icon";
import getIcon from "../../util/getIcon";
import GenrePill from "../GenrePill";
import useGenreList from "../../hooks/useGenreList";
import cutText from "../../util/cutText";
// import Trailer from "./Trailer";
import {
    FeaturedStyle,
    BGWrapper,
    BG,
    FeaturedContainer,
    Content,
    Description,
    FeaturedButton,
    Cover,
    Genres,
} from "./styles";

export default function Featured({ featured }) {
    const { data: genreNames, isLoading } = useGenreList();

    const genreList =
        genreNames &&
        featured.genre_ids.map((id) => {
            let genreName, itemId;
            genreNames.genres.forEach((item) => {
                if (item.id === id) {
                    genreName = item.name;
                    itemId = item.id;
                }
            });
            return (
                <GenrePill
                    key={itemId + String(Math.random() * 2)}
                    genre={genreName}
                    id={itemId}
                />
            );
        });


    return (
        <div>
            <FeaturedStyle>
                <BGWrapper>
                    <BG
                        src={`https://image.tmdb.org/t/p/original/${featured.backdrop_path}`}
                        alt={featured.name || featured.original_title}
                    />
                </BGWrapper>
                <FeaturedContainer>
                    <Content>
                        <h2>{`${featured.name || featured.original_title} (${
                            featured.release_date &&
                            featured.release_date.split("").slice(0, 4).join("")
                        })`}</h2>
                        <Genres>{genreList}</Genres>
                        <Description>
                            {featured.overview
                                ? cutText(featured.overview,300)
                                : "No summary found"}
                        </Description>
                        <FeaturedButton>
                            <Icon>
                                <use href={getIcon("play")} />
                            </Icon>
                            Watch Trailer
                        </FeaturedButton>
                    </Content>
                    <Cover>
                        <Link to={`/movie/${featured.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${featured.poster_path}`}
                                alt={featured.original_title + "poster"}
                                className="featured__poster"
                            />
                        </Link>
                    </Cover>
                </FeaturedContainer>
            </FeaturedStyle>
        </div>
    );
}

/*
  const genreList =
        featured.genre_ids &&
        featured.genre_ids.map((id) => {
            let genreName, itemId;
            movieGenres.forEach((item) => {
                if (item.id === id) {
                    genreName = item.name;
                    itemId = item.id;
                }
            });
            return (
                <GenrePill
                    key={itemId + String(Math.random() * 2)}
                    genre={genreName}
                    id={itemId}
                />
            );
        });
*/
