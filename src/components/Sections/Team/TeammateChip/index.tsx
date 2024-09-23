'use client'

import React, { FC, ReactNode, useState } from "react";
import { ITeammateChipProps } from "./types";
import styled from "styled-components";
import { Text } from "@/components/Text";
import { BORDER_RADIUS, COLORS } from "@/global/theme";
import Tilt from 'react-parallax-tilt'

const StyledContainer: FC<{ image: string, key: string, children: ReactNode }> = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    width: 100%;
    height: auto;
    min-height: 300px;
    padding: 2rem;

    box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
    border-radius: ${BORDER_RADIUS}px;

    cursor: pointer;
    transition: all .6s ease;
    transform-style: preserve-3d;
    transform-style: preserve-3d;
    box-sizing: border-box;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    & > div:last-of-type {
        display: none;
    }

    &:hover {
        box-shadow: 8px 8px 14px rgba(0,0,0,0.3);
        transform: scale(1.1);
        align-items: start;

        & > div:last-of-type {
            display: flex;
        }
    }
`

export const TeammateChip: FC<ITeammateChipProps> = ({
    description,
    id,
    imageUrl,
    label
}) => {

    return (
        <Tilt>
            <StyledContainer key={id} image={imageUrl}>
                <Text label={label} size="lg" variant="title" />
                <Text label={description} size="md" variant="banner" />
            </StyledContainer>
        </Tilt>
    )
}