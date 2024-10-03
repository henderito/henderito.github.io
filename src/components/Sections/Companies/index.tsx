'use client'

import React, { FC } from "react"
import styled from "styled-components"
import { ICompaniesProps } from "./types"
import { useTranslations } from "next-intl"
import { Text } from "@/components/Text"
import Image from 'next/image'
import { ImageTile } from "@/components/ImageTile"
import { HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme"
import { VideoPlayer } from "@/components/VideoPlayer"
import { UniqueerLink } from "@/components/Link"
import { ASSET_UNICORNS_3D_UNICORN, ASSET_UNICORNS_CONTACT_UNICORN, ASSET_UNICORNS_LOGO_UNICORN, ASSET_UNICORNS_SADO_UNICORN, YOUTUBE_UNIQUEER_LINK } from "@/global/constants"

const StyledContainer = styled.div`
    display: flex;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    min-width: 100vw;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;

    @media (max-width: 1500px) {
        padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING - 4}rem;
    }

    @media (max-width: 1100px) {
        padding: 2rem 2rem 0px 2rem;
    }

    @media (max-width: 550px) {
        
    }
`

const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: 1500px) {
        grid-template-columns: 2fr 3fr;
    }

    @media (max-width: 1100px) {
        display: flex;
    /* grid-template-columns: 2fr 4fr; */
    }

    @media (max-width: 550px) {
    /* grid-template-columns: 2fr 4fr; */
    }
`

const ImageTileContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 100%;
    min-height: 700px;

    @media (max-width: 1500px) {
        min-height: 500px;
    }

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 550px) {
        min-height: 700px;
    }
`

const StyledVideoDescriptionContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 3rem;
  
    @media (max-width: 1100px) {
        align-items: center;
    }

    @media (max-width: 550px) {
    }
`

const StyledVideoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:
      repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-flow: row;
    gap: 1rem;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 550px) {
    }
`

const WeDoImage = styled.div`
    background-image: url(${ASSET_UNICORNS_CONTACT_UNICORN});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    min-height: 300px;

    @media (max-width: 1500px) {
    }

    @media (max-width: 1100px) {
        display: none;
    }

    @media (max-width: 550px) {
    }
`

const ImageLogoContainer = styled.div`
    width: 100%;
    margin: 4rem 0px;
    display: flex;
    justify-content: center;

    @media (max-width: 1500px) {
        margin: 2rem 0px;
    }

    @media (max-width: 1100px) {
        margin: 1rem 0px;
    }

    @media (max-width: 550px) {
        /* margin: 4rem 0px; */
    }
`

export const CompaniesSection: FC<ICompaniesProps> = () => {
    const t = useTranslations('Home.GeneralInfo')

    return (
        <StyledContainer>
            <TitleContainer>
                <WeDoImage />
                {/* <Text label={t("Description")} size="md" variant="description" /> */}
                <p>{t("Description")}</p>
            </TitleContainer>
            <StyledVideoDescriptionContainer>
                <Text label={t('Interventions')} size="3xl" variant="alternatePink" />
                <StyledVideoContainer>
                    <VideoPlayer description="blablablablablablablablablabla" id="" src='https://www.youtube.com/watch?v=ggSMscR-LcU' title="PRIMER UNICORNIO EN TAMAÑO REAL" />
                    <VideoPlayer description="blablablablablablablablablabla" id="" src='https://www.youtube.com/watch?v=ErPvtiCbecA' title="UN AÑO JUNTOS" />
                    <VideoPlayer description="blablablablablablablablablabla" id="" src='https://www.youtube.com/watch?v=t9RPDuGO2aA' title="NUEVAS OBRAS" />
                    <VideoPlayer description="blablablablablablablablablabla" id="" src='https://www.youtube.com/watch?v=S09PtaxArKw' title="SEGUNDA EDICION Y CONVERSATORIO ARTE Y DERECHOS HUMANOS" />
                </StyledVideoContainer>
                <UniqueerLink href={YOUTUBE_UNIQUEER_LINK} label={t('ViewMore')} />
            </StyledVideoDescriptionContainer>
            <ImageLogoContainer>
                <Image src={ASSET_UNICORNS_LOGO_UNICORN} alt='Uniqueer logo' width={100} height={100} />
            </ImageLogoContainer>
            <ImageTileContainer>
                <ImageTile 
                    image={ASSET_UNICORNS_SADO_UNICORN}
                    buttonLabel={t('BuySculptureCTA')} 
                    description={t('BuySculptureDesc')}
                    url=""
                    title={t('BuySculpture')} 
                />
                <ImageTile 
                    image={ASSET_UNICORNS_3D_UNICORN}
                    buttonLabel={t('Visit3DGalleryCTA')} 
                    description={t('Visit3DGalleryDesc')}
                    url=""
                    title={t('Visit3DGallery')} 
                />
            </ImageTileContainer>
        </StyledContainer>
    )
}