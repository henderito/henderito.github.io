'use client'

import React, { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { IHeaderProps } from './types'
import { headerItems, IHeaderItems } from './items'
import { HeaderItem } from './Item'
import Button from '../Button'
import Image from 'next/image'
import { COLORS, HEADER_HEIGHT, HOME_COLUMN_PADDING } from '@/global/theme'
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '../LanguageSelector'
import { languageOptions } from '@/global/languageOptions'
import { ASSET_UNICORNS_LOGO } from '@/global/constants'
import { DonateLink } from '../DonateLink'
import { useParams } from 'next/navigation'

const StyledContainer: FC<{ children: ReactNode, background: boolean}> = styled.div`
    min-width: 100%;
    display: flex;
    height: ${HEADER_HEIGHT}rem;
    position: absolute;
    top: 0;
    z-index: 50;
    background: ${props => props.background ? COLORS.gray : 'transparent'};
    justify-content: space-between; 
    align-items: center;
    padding: 2rem ${HOME_COLUMN_PADDING - 10}rem 2rem ${HOME_COLUMN_PADDING}rem;
    top: 0;
`

const StyledItemContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: space-between; 
    align-items: center; 
`



export const Header: FC<IHeaderProps> = ({ hasBackground = false}) => {
    const t = useTranslations('Home.Header')
    const lang = useParams()?.locale as string;

    return (
        <StyledContainer background={hasBackground}>
            <Image src={ASSET_UNICORNS_LOGO} alt='Uniqueer logo' width={180} height={60} />
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