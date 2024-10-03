'use client'

import React, { FC } from "react"
import { IStartProps } from "./types"
import styled from "styled-components"
import { HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme";
import { Text } from "@/components/Text";
import { useTranslations } from 'next-intl';
import Button from "@/components/Button";
import { Overlay } from "@/components/Overlay";
import { ASSET_BACKGROUND_UNICORN } from "@/global/constants";

const StyledBackground = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${ASSET_BACKGROUND_UNICORN});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

const StyledContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem 0px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 1500px) {
        padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING - 4}rem 0px;
    }

    @media (max-width: 1100px) {
        padding: 2rem 0px 0px 2rem;
        gap: 0;
        justify-content: space-evenly;
    }

    @media (max-width: 550px) {
        padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem 0px;
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    margin-top: 4rem;
`

const StyledDescriptionContainer = styled.div`
    width: 30%;

    @media (max-width: 1500px) {
        width: 45%;
    }

    @media (max-width: 1100px) {
        width: 60%;
    }

    @media (max-width: 550px) {
        width: 100%;
    }
`

export const StartSection: FC<IStartProps> = () => {
    const t = useTranslations('Home.Start')

    const visitSite = () => {}
    const butUnicorn = () => {}

    return (
        <StyledBackground>
            <Overlay>
                <StyledContainer>
                    <Text label={t('Subtitle')} size="xl" variant="banner" />
                    <Text label={t('Title')} size="4xl" variant="title" />
                    <StyledDescriptionContainer>
                        <Text label={t('Description')} size="sm" variant="alternateDescription" />
                    </StyledDescriptionContainer>
                    <StyledButtonContainer>
                        <Button 
                            onClick={butUnicorn} 
                            size="medium" 
                            variant="alternateOutlined"
                            hasIcon
                        >
                            {t('BuyUnicornCTA')}
                        </Button>
                    </StyledButtonContainer>
                </StyledContainer>
            </Overlay>
        </StyledBackground>
    )
}