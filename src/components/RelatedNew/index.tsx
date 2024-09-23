'use client'

import React, { FC } from "react";
import { IRelatedNewsProps } from "./types";
import styled from "styled-components";
import { COLORS, FORM_BORDER_RADIUS } from "@/global/theme";
import { Text } from "../Text";
import { useRouter } from "next/navigation";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: ${COLORS.white};
    height: 100%;
    width: 100%;
    /* box-shadow: 1px 2px 24px rgba(0,0,0,0.4); */
    /* border-radius: ${FORM_BORDER_RADIUS}px; */
    padding: 1rem 2rem;
    gap: 2rem;
`

const StyledImage: FC<{image: string}> = styled.div`
    width: 100%;
    height: 100%;
    min-height: 350px;
    background-image: url(${props => props.image});
    background-size: cover;
`

export const RelatedNew: FC<IRelatedNewsProps> = ({ id, image, title }) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(id)
    }
    
    return (
        <StyledContainer onClick={handleRedirect}>
            <StyledImage image={image} />
            <Text label={title} size="md" variant="black" />
        </StyledContainer>
    )
}