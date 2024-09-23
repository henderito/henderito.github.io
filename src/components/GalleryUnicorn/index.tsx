'use client'

import React, { FC, ReactNode } from "react"
import { IGalleryUnicornProps } from "./types"
import styled from "styled-components"
import { GALLERY_ASSETS_BASE_PATH, GALLERY_IMAGES_BASE_PATH } from "@/global/constants"
import Image from "next/image"

const StyledContainer: FC<{ image: string, children: ReactNode }> = styled.div`
    width: 100%;
    height: 100%;
    min-height: 300px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.image});
`

const StyledGalleryUnicorn: FC<{ image: string, children: ReactNode }> = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.image});
    transition: rotate 1s ease-in-out;

    &:hover .author-data {
        display: flex;
        transform: rotateY(180deg);
        transition: rotate 1s ease-in-out;
    }
`

const StyledStatusOverlay: FC<{ image: string }> = styled.div`
    width: 6rem;
    height: 6rem;
    margin: .8rem 0 0 .8rem;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.image});
`

const StyledAuthorData: FC<{ image: string, className: string }> = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.image});
    display: none;
    transition: rotate .1s ease-in-out;
`

export const GalleryUnicorn: FC<IGalleryUnicornProps> = ({ id, descriptionKey, author, meassurements, isAvailable = false }) => {
    const statusOverlayUrl = isAvailable ? `${GALLERY_ASSETS_BASE_PATH}/reservar-obra.png` : `${GALLERY_ASSETS_BASE_PATH}/obra-reservada.png`;
    
        // Habria que armar una url con placeholders y reemplazarla
    return (
        <StyledContainer image={`${GALLERY_ASSETS_BASE_PATH}/background2.png`}>
            <StyledGalleryUnicorn image={`${GALLERY_IMAGES_BASE_PATH}${id}/${id}1.png`}>
                <StyledAuthorData className="author-data" image={`${GALLERY_IMAGES_BASE_PATH}${id}/${id}-perfil.png`} />
                <StyledStatusOverlay image={statusOverlayUrl} />
            </StyledGalleryUnicorn>
        </StyledContainer>
    )
}