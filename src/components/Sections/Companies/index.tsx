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
    min-height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
`

const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 2rem;
    align-items: center;
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
`

const StyledVideoDescriptionContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 3rem;
`

const StyledVideoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:
      repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-flow: row;
    gap: 1rem;
`

const WeDoImage = styled.div`
    background-image: url(${ASSET_UNICORNS_CONTACT_UNICORN});
    background-size: 30rem 18rem;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    min-height: 300px;
`

const ImageLogoContainer = styled.div`
    width: 100%;
    margin: 4rem 0px;
    display: flex;
    justify-content: center;
`

export const CompaniesSection: FC<ICompaniesProps> = () => {
    const t = useTranslations('Home.GeneralInfo')

    return (
        <StyledContainer>
            <TitleContainer>
                <WeDoImage />
                <Text label={t("Description")} size="md" variant="description" />                
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