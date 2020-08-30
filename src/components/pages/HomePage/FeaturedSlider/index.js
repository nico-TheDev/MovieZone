import React from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import useNowPlaying from "../../../../hooks/useNowPlaying";
import Featured from "./Featured";
import FeaturedSkeleton from "./FeaturedSkeleton";

SwiperCore.use([Autoplay]);

export default function FeaturedSlider() {
    const history = useHistory();
    const { data, isLoading, hasError } = useNowPlaying();

    if (isLoading) return <FeaturedSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return;
    }
    const randomNumber = Math.floor(Math.random() * 13);
    const movies = data.results.slice(randomNumber, randomNumber + 4);

    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            loop
            grabCursor
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <Featured featured={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
