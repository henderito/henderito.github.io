'use client'

import React, { FC } from "react"
import { IContactFormProps } from "./types"
import styled from "styled-components"
import { ContactForm } from "@/components/Form"
import { COLORS, HEADER_ROOM_PADDING, HOME_COLUMN_PADDING } from "@/global/theme"
import { DonateBanner } from "@/components/DonateBanner"
import { BuyUniqueerBanner } from "@/components/BuyUniqueerBanner"

const StyledContainer = styled.div`
    width: 100%;
    min-width: 100vw;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    background-size: cover;
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;

    @media (max-width: 1500px) {
        padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING - 4}rem;
    }

    @media (max-width: 1100px) {
        padding: 2rem 2rem 0px 2rem;
    }

    @media (max-width: 550px) {
    padding: ${HEADER_ROOM_PADDING}rem ${HOME_COLUMN_PADDING}rem;
    }
`

export const ContactPage: FC<IContactFormProps> = () => {
    return (
        <StyledContainer>
            <BuyUniqueerBanner />
            <DonateBanner />
            <ContactForm />
        </StyledContainer>
    )
}