import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { SliderContainer, SliderTitle,Holder } from "./styles";
import MovieCard from "../MovieCard";

SwiperCore.use([Navigation]);

export default function Slider({ title, movies, type }) {
    const breakpoints = {
        300: {
            slidesPerView: 2,
            spaceBetween: 10,
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

    return (
        <Holder>
            <SliderContainer>
                    <SliderTitle>{title}</SliderTitle>
                    <Swiper
                        spaceBetween={30}
                        navigation
                        breakpoints={breakpoints}
                        grabCursor='true'
                    >
                        {movies &&
                            movies.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <MovieCard movie={movie} type={type}/>
                                </SwiperSlide>
                            ))}
                    </Swiper>
            </SliderContainer>
        </Holder>
    );
}
