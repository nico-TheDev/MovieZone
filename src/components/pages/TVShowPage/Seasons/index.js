import React from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import SeasonCard from "./SeasonCard";
import { Wrapper, Title } from "./styles";
import SeasonSkeleton from "./SeasonSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';

SwiperCore.use([Scrollbar]);

const BREAKPOINTS = {
    600: {
        slidesPerView: 2,
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
        loop: false,
    },
};

export default function Seasons({ seasons }) {


    return (
        <Wrapper>
            <Title>Seasons</Title>
            <Swiper
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore="10"
                slidesOffsetAfter="10"
                breakpoints={BREAKPOINTS}
                grabCursor
                loop
            >
                {seasons.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SeasonCard details={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
}
