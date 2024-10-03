'use client'

import { FC } from "react";
import { ITeamContainerProps } from "./types";
import styled from "styled-components";
import { HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme";
import { teammates } from "@/global/team";
import { TeammateChip } from "../TeammateChip";
import { Text } from "@/components/Text";
import { useTranslations } from "next-intl";

const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 ${HOME_COLUMN_PADDING}rem;

    @media (max-width: 1500px) {
        padding: 0 ${HOME_COLUMN_PADDING - 4}rem;
        gap: 2rem;
        margin-top: 1rem;
    }

    @media (max-width: 1100px) {
        padding: 2rem 2rem 0px 2rem;
    }

    @media (max-width: 550px) {
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns:
      repeat(auto-fill, minmax(18%, 1fr));
    width: 100%;
    height: auto;
    gap: 2rem;

    @media (max-width: 1100px) {
    grid-template-columns:
      repeat(auto-fill, minmax(40%, 1fr));
    }

    @media (max-width: 550px) {
    }
`

export const TeamContainer: FC<ITeamContainerProps> = () => {
    const t = useTranslations('Home.Team')
    
    return (
        <StyledContainer>
            {/* <Text label={t('Title')} size="4xl" variant="black" /> */}
            <h3>{t('Title')}</h3>
            <StyledGrid>
                {
                    teammates.map((item) => (
                        <TeammateChip
                            description={item.description}
                            id={item.id}
                            imageUrl={item.imageUrl}
                            label={item.label}
                            key={item.id}
                        />
                    ))
                }
            </StyledGrid>
        </StyledContainer>
    )
}