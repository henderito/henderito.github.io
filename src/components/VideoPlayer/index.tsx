'use client'

import React, { FC } from "react"
import { IVideoPlayerProps } from "./types"
import styled from "styled-components"
import ReactPlayer from "react-player"
import { Text } from "../Text"

const StyledVideoPlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 0.6rem;
`

export const VideoPlayer: FC<IVideoPlayerProps> = ({ description, id, src, title }) => {
    return (
        <StyledVideoPlayerContainer>
            <ReactPlayer url={src} width={350} height={250} />
            <Text label={title} size="sm" variant="description" />
            <Text label={description} size="md" variant="comment" />
        </StyledVideoPlayerContainer>
    )
}