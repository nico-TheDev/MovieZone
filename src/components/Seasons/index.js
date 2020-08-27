import React from "react";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import useDetails from "../../hooks/useDetails";
import SeasonCard from "./SeasonCard";
import { Wrapper, Title } from "./styles";

SwiperCore.use([Scrollbar]);

export default function Seasons({ id }) {
    const { data, isLoading, isError } = useDetails(id, "tv");

    if (isLoading) return "Loading Cards";

    if (isError) return "Loading Error";

    const seasons = data.seasons;

    const breakpoints = {
        600: {
            slidesPerView: 2,
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
        },
    };

    return (
        <Wrapper>
            <Title>Seasons</Title>
            <Swiper
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore="10"
                slidesOffsetAfter="10"
                grabCursor="true"
                breakpoints={breakpoints}
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
