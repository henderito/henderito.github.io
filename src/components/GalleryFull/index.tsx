'use client'

import React, { FC } from "react"
import { IGalleryFullProps } from "./types"
import styled from "styled-components"
import { HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme"
import { GalleryGrid } from "../Gallery"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
    background-image: url('/assets/galeria/misc/galeria-background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const GalleryComplete: FC<IGalleryFullProps> = () => {
    return (
        <StyledContainer>
            <GalleryGrid />
        </StyledContainer>
    )
}