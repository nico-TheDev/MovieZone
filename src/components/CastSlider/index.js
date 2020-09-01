import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import CastCard from "./CastCard";
import { Title, CastContainer } from "./styles";
import EmptyCast from "components/EmptyPlaceholder";

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

export default function CastSlider({ casts }) {
 
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
                {casts.length ? (
                    casts.slice(0, 20).map((cast) => (
                        <SwiperSlide key={cast.id}>
                            <CastCard person={cast} />
                        </SwiperSlide>
                    ))
                ) : (
                    <EmptyCast title="No Cast Data Found" />
                )}
            </Swiper>
        </CastContainer>
    );
}
