'use client'

import React, { FC } from "react"
import { INewsTileProps } from "./types"
import styled from "styled-components"
import { Text } from "../Text"
import { UniqueerLink } from "../Link"
import { FORM_BORDER_RADIUS, COLORS } from "@/global/theme"

const StyledNewsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 2rem;
    gap: 2rem;
    width: 100%;
    box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
    transition: all .7s ease;
    margin: 1rem 0;
    background-color: ${COLORS.white};
    border-radius: ${FORM_BORDER_RADIUS}px;
    opacity: 0.9;

    &:hover {
        grid-template-columns: 1fr 3fr;
        background-color: ${COLORS.white};
        opacity: 1;

        img {
            width: 340px;
        }
    }
`

const StyledImage = styled.img`
    height: auto;
    width: 250px;
    transition: all .7s ease;
    border-radius: ${FORM_BORDER_RADIUS}px;
`

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`

export const NewsTile: FC<INewsTileProps> = ({ title, description, imageUrl, newsId }) => {
    return (
        <StyledNewsContainer>
            <StyledImage src={imageUrl} />
            <StyledTextContainer>
                <Text label={title} size="2xl" variant="alternatePink" />
                <Text label={description} size="md" variant="description" />
                <UniqueerLink href={`/novedades/${newsId}`} label="Leer más" />
            </StyledTextContainer>
        </StyledNewsContainer>
    )
}