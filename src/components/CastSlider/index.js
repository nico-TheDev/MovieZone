import React from "react";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import useGetCasts from "../../hooks/useGetCasts";
import CastCard from "../CastCard";
import { Title, CastContainer } from "./styles";

SwiperCore.use([Navigation]);

export default function CastSlider({ id, type }) {
    const { data, isLoading, isError } = useGetCasts(id, type);
    const breakpoints = {
        380: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 2,
        },
        640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        760: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    };

    if (isLoading) return "Cast Loading";

    if (isError) return "Cast Error";

    return (
        <CastContainer>
            <Title>Casts</Title>
            <Swiper
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={20}
                freeMode={true}
                navigation
                grabCursor={true}
                breakpoints={breakpoints}
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
