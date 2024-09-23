'use client'

import React, { FC } from "react"
import { ILinkProps } from "./types"
import Link from 'next/link';
import styled from "styled-components";
import { COLORS } from "@/global/theme";

const StyledLink = styled(Link)`
    color: ${COLORS.primary};
    background-color: transparent;
    font-weight: bold;

    &:active {
        color: ${COLORS.black};
    }

    &:hover {
        /* font-weight: 700; */
    }
`;


const StyledLinkContainer = styled.div`
    position: relative;
    display: inline-block;
    padding-bottom: 0.3rem;

    &::after {
        border-bottom: 1px solid ${COLORS.primary};
        position: absolute;
        left: 50%;
        content: ' ';
        transform: translateX(-50%);
        transition: width 0.2s linear;
        width: 0;
        height: 0;
        bottom: 0;
    }

    &:hover::after {
        width: 80%;
    }
`;

export const UniqueerLink: FC<ILinkProps> = ({ href, label }) => {
    return (
        <StyledLinkContainer>
            <StyledLink href={href}>
                {label}
            </StyledLink>
        </StyledLinkContainer>
    )
}