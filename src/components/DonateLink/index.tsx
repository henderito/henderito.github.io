'use client'

import React, { FC } from "react"
import { IDonateLinkProps } from "./types"
import { useTranslations } from "next-intl"
import { MERCADOPAGO_DONATION_LINK } from "@/global/constants"
import { COLORS, BORDER_RADIUS } from "@/global/theme"
import styled from "styled-components"
import { ChevronRight } from "../Icons"

const StyledLink = styled.a`
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    border: 2px solid ${COLORS.primary};
    background-image: linear-gradient(90deg, hsl(198, 76%, 53%) 0%, hsl(198, 76%, 53%) 56%);
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: .5s;
    cursor: pointer;
    padding: 8px 24px;
    border-radius: ${BORDER_RADIUS}px;
    display: flex;
    align-items: center;
    font-weight: bold !important;

    &:hover {
        background-color: ${COLORS.blue};
        border: 2px solid ${COLORS.blue};
        background-size: 100% 100%; 
    }
`

const ChevronContainer = styled.div`
    padding-left: 2rem;
`

export const DonateLink: FC<IDonateLinkProps> = () => {
    const t = useTranslations('Home.Contact')
    
    return (
        <StyledLink href={MERCADOPAGO_DONATION_LINK} target='__blank'>
            {t('DonateCTA')}
            <ChevronContainer>
                <ChevronRight fill={COLORS.white} height={20} width={20} />
            </ChevronContainer>
        </StyledLink>
    )
}