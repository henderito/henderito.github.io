'use client'

import React, { FC } from "react";
import { INewsComponentProps } from "./types";
import styled from "styled-components";
import { Text } from "../Text";
import { FORM_BORDER_RADIUS, COLORS } from "@/global/theme";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: ${COLORS.white};
    height: 100%;
    width: 100%;
    /* box-shadow: 1px 2px 24px rgba(0,0,0,0.4);
    border-radius: ${FORM_BORDER_RADIUS}px; */
    padding: 2rem 4rem;
    gap: 4rem;
`

const StyledTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`

export const NewsComponent: FC<INewsComponentProps> = ({
    newsText,
    title, 
    children,
    author,
    date
}) => {
    return (
        <StyledContainer>
            <StyledTitleContainer>
                <Text label={title} size="2xl" variant="alternatePink" align="start" />
                <Text label={`${author} ${date}`} size="md" variant="alternatePink" align="start" />
            </StyledTitleContainer>
            <Text label={newsText} size="sm" variant="description" align="start" />
            {children}
        </StyledContainer>
    )
}