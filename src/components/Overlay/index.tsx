'use client'

import React, { FC, ReactNode } from "react"
import { IOverlayProps } from "./types"
import styled from "styled-components"
import { COLORS } from "@/global/theme"

const StyledContainer: FC<{ children: ReactNode, border: number}> = styled.div`
    width: 100%;
    height: 100%;
    background: ${COLORS.overlay};
    border-radius: ${props => props.border}px;
    /* background: linear-gradient(90deg, rgba(228,18,134,0.6) 0%, rgba(228,18,134,0) 56%); */
`

export const Overlay: FC<IOverlayProps> = ({ border = 0, children }) => {
    return <StyledContainer border={border}>{children}</StyledContainer>
}