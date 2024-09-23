'use client'

import React, { FC } from "react"
import { ISocialLinkProps } from "./types"
import Link from 'next/link';
import styled from "styled-components";
import { COLORS } from "@/global/theme";

const StyledLink = styled(Link)`
    color: ${COLORS.primary};
    background-color: transparent;
    font-weight: 400;
`;


const StyledLinkContainer = styled.div`
    position: relative;
    display: inline-block;
    padding-bottom: 0.3rem;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.5);
    }
`;

export const SocialLink: FC<ISocialLinkProps> = ({ href, children }) => {
    return (<StyledLinkContainer>
                <StyledLink href={href}>
                    {children}
                </StyledLink>
            </StyledLinkContainer>)
}