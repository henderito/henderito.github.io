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
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${COLORS.white};
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
    gap: 2rem;
    background-image: url(${ASSET_BACKGROUND_GRAY});
    background-size: cover;
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
    /* border: 1px solid rgba(220, 220, 220, 0.9); */
    padding: 3rem;
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