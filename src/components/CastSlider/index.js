import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import useGetCasts from "../../hooks/useGetCasts";
import CastCard from "./CastCard";
import { Title, CastContainer } from "./styles";

SwiperCore.use([Navigation]);

const BREAKPOINTS = {
    300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
    },
    450: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
    },
    700: {
        slidesPerView: 4,
        slidesPerGroup: 4,
    },
    900: {
        slidesPerView: 5,
    },
};

export default function CastSlider({ id, type }) {
    const { data, isLoading, isError } = useGetCasts(id, type);

    if (isLoading) return "Cast Loading";

    if (isError) return "Cast Error";

    return (
        <CastContainer>
            <Title>Casts</Title>
            <Swiper
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={20}
                freeMode
                navigation
                grabCursor
                breakpoints={BREAKPOINTS}
            >
                {data.cast.slice(0, 20).map((cast) => (
                    <SwiperSlide key={cast.id}>
                        <CastCard person={cast} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </CastContainer>
    );
}
