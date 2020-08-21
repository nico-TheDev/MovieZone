import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { SliderContainer, SliderTitle } from "./styles";

import MovieCard from "../MovieCard";
import Container from "../shared/Container";

SwiperCore.use([Navigation]);

export default function Slider({ title, movies }) {
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 4,
        },
        760: {
            slidesPerView: 6,
        },
    };

    return (
        <SliderContainer>
                <SliderTitle>{title}</SliderTitle>
                <Swiper
                    spaceBetween={30}
                    navigation
                    breakpoints={breakpoints}
                >
                    {movies &&
                        movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        ))}
                </Swiper>
        </SliderContainer>
    );
}
