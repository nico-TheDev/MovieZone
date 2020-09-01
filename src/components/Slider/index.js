import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { SliderContainer, SliderTitle, Holder } from "./styles";
import MovieCard from "components/MovieCard";

SwiperCore.use([Navigation]);

const BREAKPOINTS = {
    300: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode:true
    },
    450: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    700: {
        slidesPerView: 4,
    },
    900: {
        slidesPerView: 5,
    },
    1000: {
        slidesPerView: 6,
    },
};

export default function Slider({ title, movies, type }) {
    return (
        <Holder>
            <SliderContainer>
                <SliderTitle>{title}</SliderTitle>
                <Swiper
                    spaceBetween={30}
                    navigation
                    breakpoints={BREAKPOINTS}
                    grabCursor
                    
                >
                    {movies?.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} type={type} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </SliderContainer>
        </Holder>
    );
}
