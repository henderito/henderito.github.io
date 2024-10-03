'use client'

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { IHeaderProps } from './types'
import { headerItems, IHeaderItems } from './items'
import { HeaderItem } from './Item'
import Button from '../Button'
import { COLORS, HEADER_HEIGHT } from '@/global/theme'
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '../LanguageSelector'
import { languageOptions } from '@/global/languageOptions'
import { ASSET_UNICORNS_LOGO } from '@/global/constants'
import { DonateLink } from '../DonateLink'
import { useParams } from 'next/navigation'

const StyledContainer: FC<{ children: ReactNode, background: boolean}> = styled.div`
    display: flex;
    min-width: 100%;
    height: ${HEADER_HEIGHT}rem;
    position: absolute;
    top: 0;
    z-index: 50;
    background: ${props => props.background ? COLORS.gray : 'transparent'};
    justify-content: space-between; 
    align-items: center;
    padding: 2rem 4vw 2rem 8vw;

    @media (max-width: 1100px) {
        justify-content: center;
    }

    @media (max-width: 550px) {
    max-width: 160px;
    }
`

const StyledLogo: FC<{ image: string, href: string }> = styled.a`
    width: 14vw;
    height: 4vw;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  
    @media (max-width: 1100px) {
        width: 120px;
        height: 40px;
    }

    @media (max-width: 550px) {
    }
`

const StyledItemContainer = styled.div`
    display: flex;
    gap: 3vw;
    justify-content: flex-end; 
    align-items: center;

    @media (max-width: 1500px) {
    }

    @media (max-width: 1100px) {
        display: none;
    }

    @media (max-width: 550px) {
    }
`

export const Header: FC<IHeaderProps> = ({ hasBackground = false}) => {
    const t = useTranslations('Home.Header')
    const lang = useParams()?.locale as string;

    return (
        <StyledContainer background={hasBackground}>
            <StyledLogo image={ASSET_UNICORNS_LOGO} href="/" />
            <StyledItemContainer>
                {headerItems.map((item: IHeaderItems) => (
                    <HeaderItem {...item} key={item.itemId} locale={lang} />
                ))}
                <Button
                    size="base"
                    variant="alternateOutlined"
                    fontWeight={700}
                >
                    {t('ContactUs')}
                </Button>
                <DonateLink />
            </StyledItemContainer>
            <LanguageSelector flagDefault={languageOptions[0]} options={languageOptions} />
        </StyledContainer>
    )
}