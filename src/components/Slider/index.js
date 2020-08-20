import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation";
import SliderContainer from "./styles";

import MovieCard from "../MovieCard";

SwiperCore.use([Navigation]);

export default function Slider({ title, movies }) {
    return (
        <SliderContainer>
            <Title>{title} Movies</Title>
            <Swiper spaceBetween={30} slidesPerView={6} navigation>
                {movies &&
                    movies.map((movie) => (
                        <SwiperSlide>
                            <MovieCard key={movie.id} movie={movie} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </SliderContainer>
    );
}
