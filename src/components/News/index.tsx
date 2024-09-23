'use client'

import { COLORS, HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { UniqueerLink } from "../Link";
import { NewsComponent } from "../NewsComponent";
import { INewsData } from "@/helpers/getNewsInfoById";
import { IRelatedNews } from "@/helpers/getRelatedPostInfoById";
import { useTranslations } from "next-intl";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { INewsContainerProps } from "./types";
import { RelatedNew } from "../RelatedNew";

const StyledPageContainer = styled.div`
  padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
  min-height: 100vh;
  width: 100%;
  background-color: ${COLORS.gray};
`

const StyledToggleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const StyledImagesContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-auto-flow: row;
  grid-template-columns: 
      repeat(auto-fill, minmax(250px, 1fr));
`

const StyledImage: FC<{image: string}> = styled.div`
    width: 100%;
    height: 100%;
    min-height: 800px;
    background-image: url(${props => props.image});
    background-size: cover;
`

const StyledRelatedPostContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
`

const StyledCarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    /* min-height: 1000px; */
`

export const NewsContainer: FC<INewsContainerProps> = ({ id, data, related, imagesPath, isGrid = false }) => {
    const t = useTranslations('News.Misc')
  
    return (
        <StyledPageContainer>
            <NewsComponent
                author={data.author}
                date={data.date}
                newsText={data.text}
                title={data.title}
            >
              {isGrid ? 
                <StyledImagesContainer>
                    {imagesPath.map((item) => (
                        <StyledImage image={`${data.images}/${item}`} />
                    ))}
                </StyledImagesContainer> 
                    : 
                <StyledCarouselContainer>
                    <Carousel>
                        {imagesPath.map((item) => (
                            <StyledImage image={`${data.images}/${item}`} />
                        ))}
                    </Carousel>
                </StyledCarouselContainer>
            }
            </NewsComponent>
            <StyledToggleContainer>
              <UniqueerLink href={data.relatedIds[0]} label={t('Previous')} />
              <UniqueerLink href={data.relatedIds[1]} label={t('Next')} />
            </StyledToggleContainer>
            <StyledRelatedPostContainer>
              {
                related.map((item) => (
                  <RelatedNew
                    id={item.id}
                    image={item.image}
                    title={item.title}                  
                  />
                ))
              }
            </StyledRelatedPostContainer>
        </StyledPageContainer>
    )
}