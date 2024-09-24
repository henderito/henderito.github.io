'use client'

import React, { FC, ReactNode } from "react"
import styled from "styled-components"
import { ITextsProps } from "./types"
import { TEXT_SIZES, TEXT_STYLES } from "@/global/theme";

const StyledText: FC<{ children: ReactNode, style: any, alignment: 'center' | 'start' | 'end'}> = styled.div`
    text-align: ${props => props.alignment};
    color: var(--color);
    background-color: var(--backgroundColor);
    font-weight: var(--fontWeight);
    font-size: var(--fontSize);
    font-style: var(--fontStyle);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const Text: FC<ITextsProps> = ({ label, variant, size, align = 'start',  ...rest }) => {
    const textSize = TEXT_SIZES[size];
    const textStyle = TEXT_STYLES[variant];

    return <StyledText style={{...textSize, ...textStyle}} alignment={align} {...rest}>{label}</StyledText>
}

