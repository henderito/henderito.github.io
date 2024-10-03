'use client'

import React, { FC } from "react"
import { IFooterProps } from "./types"
import { styled } from "styled-components"
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter, YouTube } from '@/components/Icons'
import { SocialLink } from "@/components/SocialLink"
import { Text } from "@/components/Text"
import { COLORS, HOME_COLUMN_PADDING } from "@/global/theme"
import { useTranslations } from "next-intl"
import { ASSET_UNICORNS_LOGO_UNICORN, FACEBOOK_UNIQUEER_LINK, INSTAGRAM_UNIQUEER_LINK, LINKEDIN_UNIQUEER_LINK, TWITTER_UNIQUEER_LINK, YOUTUBE_UNIQUEER_LINK } from "@/global/constants"

const StyledFooterContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 100vw;
    flex-direction: column;
    padding: 0 ${HOME_COLUMN_PADDING}rem 1rem;
    gap: 1rem;

    @media (max-width: 1500px) {
        padding: 0 ${HOME_COLUMN_PADDING - 4}rem 1rem;
    }

    @media (max-width: 1100px) {
        padding: 2rem;
    }

    @media (max-width: 550px) {
        padding: 2rem;
    }
`

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${COLORS.gray};
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const Footer: FC<IFooterProps> = () => {
    const t = useTranslations('Home.Footer')

    return (
        <StyledFooterContainer>
            <Divider />
            <FooterContainer>
                <Text label={t('Title')} size="sm" variant="description" />
                <Image src={ASSET_UNICORNS_LOGO_UNICORN} alt='Uniqueer logo' width={45} height={45} />
                <SocialContainer>
                    <SocialLink href={FACEBOOK_UNIQUEER_LINK}>
                        <Facebook height={25} width={25} />
                    </SocialLink>
                    <SocialLink href={INSTAGRAM_UNIQUEER_LINK}>
                        <Instagram height={25} width={25} />
                    </SocialLink>
                    <SocialLink href={YOUTUBE_UNIQUEER_LINK}>
                        <YouTube height={25} width={25} />
                    </SocialLink>
                    <SocialLink href={TWITTER_UNIQUEER_LINK}>
                        <Twitter height={25} width={25} />
                    </SocialLink>
                    <SocialLink href={LINKEDIN_UNIQUEER_LINK}>
                        <Linkedin height={25} width={25} />
                    </SocialLink>
                </SocialContainer>
            </FooterContainer>
        </StyledFooterContainer>
    )
}