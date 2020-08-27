import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import useNowPlaying from "../../../../hooks/useNowPlaying";
import Featured from "./Featured";
import FeaturedLoader from "../../../Loader/FeaturedLoader";

SwiperCore.use([Autoplay]);

export default function FeaturedSlider() {
    const { data, isLoading, isError } = useNowPlaying();

    if (isLoading) return <FeaturedLoader />;

    if (isError) return "An Error Occured";

    const randomNumber = Math.floor(Math.random() * 13);
    const movies = data.results.slice(randomNumber, randomNumber + 4);

    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            loop="true"
            grabCursor='true'
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <Featured featured={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
