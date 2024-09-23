'use client'

import React, { FC } from "react"
import { IImageTileContainerProps, ImageTileProps } from "./types"
import styled from "styled-components"
import { Text } from "../Text"
import Button from "../Button"
import { Overlay } from "../Overlay"
import { UniqueerLink } from "../Link"
import { BORDER_RADIUS } from "@/global/theme"

const StyledBackground: FC<IImageTileContainerProps> = styled.div`
    background-image: url(${(props: Pick<ImageTileProps, "image">) => props.image});
    background-size: cover;
    height: 500px;
    min-height: 500px;
    /* width: 100%; */
    width: 500px;
    border-radius: 16px;
    background-color: transparent;
    transition: all 0.3s ease;

    &:hover {
        min-height: 600px;
        width: 600px;
        height: 600px;
    }
`

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 4rem 3rem 0px;
    gap: 1rem;
    background-color: transparent;

    & > button {
        display: none;
    }
    &:hover {
        & > button {
            display: flex;
        }
    }
`

const StyledDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: transparent; */
    width: 100%;
    height: 100%;

    & > button {
        display: none;
    }

    &:hover {
        & > button {
            display: flex;
        }
    }
`

export const ImageTile: FC<ImageTileProps> = ({ image, buttonLabel, description, url, title }) => {
    return (
    <StyledBackground image={image}>
        <Overlay border={16}>
            <StyledContainer>
                <Text label={title} size="lg" variant="title" />
                {/* <StyledDescriptionContainer> */}
                    <Text label={description} size="sm" variant="banner" />
                    {/* <UniqueerLink href={url} label={buttonLabel} /> */}
                    <Button size="small" variant="alternateOutlined" hasIcon>
                        {buttonLabel}
                    </Button>
                {/* </StyledDescriptionContainer> */}
            </StyledContainer>
        </Overlay>
    </StyledBackground>)
}