'use client'

import React, { FC } from "react"
import { IContactFormProps } from "../Sections/Contact/types"
import styled from "styled-components"
import { useFormStatus } from "react-dom"
import Button from "../Button"
import { useTranslations } from "next-intl"
import { Text } from "../Text"
import { COLORS } from "@/global/theme"

const StyledForm = styled.div`
    display: flex;
    padding: 2rem 2rem;
    height: 160px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLORS.primary};
    box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
    gap: 2rem;
`

export const DonateBanner: FC<IContactFormProps> = () => {
    const t = useTranslations('Home.Contact')

    const { pending } = useFormStatus();

    return (
        <StyledForm>
            <Text label={t('DonateBanner')} size="lg" variant="title" />
            <div>
                <Button 
                    disabled={pending} 
                    size="small" 
                    variant="ghost" 
                    type="submit" 
                    hasIcon 
                    fill={COLORS.white}
                    fontWeight={700}
                >
                    {t('DonateCTA')}
                </Button>
            </div>
        </StyledForm>
    )
}