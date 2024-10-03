'use client'

import React, { FC } from "react"
import { IMembersProps } from "./types"
import { styled } from "styled-components"
import { Text } from "@/components/Text"
import { useTranslations } from 'next-intl';
import { COLORS, HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme"
import { logos } from "@/global/logos"
import Image from 'next/image'
import { ASSET_BACKGROUND_GRAY } from "@/global/constants"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${COLORS.white};
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
    gap: 2rem;
    background-image: url(${ASSET_BACKGROUND_GRAY});
    background-size: cover;

    @media (max-width: 1500px) {
        padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING - 4}rem;
    }

    @media (max-width: 1100px) {
        padding: 2rem 0px 0px 2rem;
    }

    @media (max-width: 550px) {
    }
`

const StyledLogoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:
      repeat(auto-fill, minmax(250px, 1fr));
`

const StyledLogo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;

    @media (max-width: 1100px) {
        padding: 2rem;
    }

    @media (max-width: 550px) {
    max-width: 160px;
    }
`

export const MemberSection: FC<IMembersProps> = () => {
    const t = useTranslations('Home.Members')

    return (
        <StyledContainer>
            <Text label={t('Title')} size="lg" variant="alternatePink" />
            <StyledLogoContainer>
                {
                    logos.map((logo, index) => (
                        <StyledLogo>
                            <Image src={logo} alt="logo" key={`company-logo-${index}`} height={40} />
                        </StyledLogo>
                    ))
                }
            </StyledLogoContainer>
        </StyledContainer>)
}