'use client'

import React, { FC } from "react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";
import { Tile } from "./Tile";
import { ICarouselProps } from "./types";
import { ITileProps } from "./Tile/types";

const StyledSwiper = styled(Swiper)`
  & .swiper-button-next,
  .swiper-button-prev {
    color: #E41286;
    background-color: white;
    background-position: center;
    background-size: 40px;
    background-repeat: no-repeat;
    padding: 8px 16px;
    border-radius: 100%;
    border: 2px solid black;
    color: red;
    position: absolute;
  }

  & .swiper-button-next::after,
  .swiper-button-prev::after {
    content: "";
  }

  & .swiper-pagination-bullet{
    width: 40px;
    height: 40px;
    background-color: red;
  }

  width: 100%;
  height: 70%;
  /* display: flex;
  align-items: center;
  justify-content: center;
  margin: 0; */
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
`;

export const Carousel: FC<ICarouselProps> = ({ data }) => (
    <StyledSwiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {data.map((item: ITileProps, index: number) => (
        <StyledSwiperSlide key={`key-${item.title}-${index}`}>
          <Tile
            title={item.title}
            tags={item.tags}
            image={item.image}
            description={item.description}
          />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );