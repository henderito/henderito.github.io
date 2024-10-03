'use client'

import React, { FC } from "react"
import styled from "styled-components"
import { useTranslations } from "next-intl"
import { Text } from "../Text"
import { COLORS } from "@/global/theme"
import { IBuyUniqueerBannerProps } from "./types"
import { DonateLink } from "../DonateLink"

const StyledForm = styled.div`
    display: flex;
    padding: 2rem 2rem;
    height: 160px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLORS.blue};
    box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
    gap: 2rem;

    @media (max-width: 550px) {
        flex-direction: column;
        height: auto;
    }
`

export const BuyUniqueerBanner: FC<IBuyUniqueerBannerProps> = () => {
    const t = useTranslations('Home.Contact')

    return (
        <StyledForm>
            <Text label={t('BuyUnicorn')} size="lg" variant="title" />
            <DonateLink />
        </StyledForm>
    )
}