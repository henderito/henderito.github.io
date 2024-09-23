'use client'

import React, { FC } from "react";

import { ISliderProps } from "./types";
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
    margin: 2rem 0;

    & .swiper-button-next,
    .swiper-button-prev {
        color: black;
    }

    & .swiper-pagination-bullet {
    background-color: black;
  }
`

export const Slider: FC<ISliderProps> = ({ children }) => {
    return (
        <StyledSwiper
            cssMode={true}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {children}
        </StyledSwiper>
    )
}