'use client'

import React, { FC } from "react"
import { IGalleryProps } from "./types"
import styled from "styled-components";
import { obrasGaleria } from "@/global/galeria";
import { GalleryUnicorn } from "../GalleryUnicorn";

const StyledGalleryContainer = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(25%, 1fr));
  /* grid-template-rows: repeat(auto-fill, minmax(30%, 1fr)); */
  /* gap: 1rem; */
  min-height: 100vh;
  height: 100%;
  overflow: visible;
`

export const GalleryGrid: FC<IGalleryProps> = () => {
    return (
      <StyledGalleryContainer>
        {
          obrasGaleria.map((item) => (
            <GalleryUnicorn 
                author={item.author} 
                descriptionKey={item.descriptionKey} 
                id={item.id} 
                meassurements={item.meassurements} 
                isAvailable={item.isAvailable} 
            />
          ))
        }
      </StyledGalleryContainer>
    )
}