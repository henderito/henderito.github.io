'use client'

import React, { FC, useActionState, useState } from "react"
// import { sendContactForm } from "@/actions/sendContactForm"
import { IContactFormProps } from "../Sections/Contact/types"
import styled from "styled-components"
import { useFormStatus } from "react-dom"
import Button from "../Button"
import { useTranslations } from "next-intl"
import { Input } from "../Input"
import { Text } from "../Text"
import { FORM_BORDER_RADIUS, COLORS } from "@/global/theme"

const StyledForm = styled.form`
    display: flex;
    padding: 2rem 2rem;
    height: 160px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLORS.yellow};
    /* border-radius: ${FORM_BORDER_RADIUS}px; */
    box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
    gap: 2rem;
`

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledInputContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: end;
`

const initialState = {
    message: ''
}

export const ContactForm: FC<IContactFormProps> = () => {
    const t = useTranslations('Home.Contact')
    // const [state, formAction] = useActionState(sendContactForm, initialState)
    const [name, setName] = useState<string | undefined>(undefined)
    const [email, setEmail] = useState<string | undefined>(undefined)

    const { pending } = useFormStatus();

    const fakeAction = () => {}

    return (
        // <StyledForm action={formAction}>
        <StyledForm>
            <StyledFormContainer>
                <Text label={t('ContactBanner')} size="lg" variant="black" />
                <Text label={t('ContactBannerSubtitle')} size="sm" variant="description" />
            </StyledFormContainer>
            <StyledInputContainer>
                <Input
                    label={t('Name')}
                    onBlur={fakeAction}
                    onChange={fakeAction}
                    onFocus={fakeAction}
                    setRef={fakeAction}
                    type="text"
                    name="name"
                    value={name}
                />
                <Input
                    label={t('Email')}
                    onBlur={fakeAction}
                    onChange={fakeAction}
                    onFocus={fakeAction}
                    setRef={fakeAction}
                    type="email"
                    name="email"
                    value={email}
                />
                <Button 
                    disabled={pending} 
                    size="small" 
                    variant="outlined" 
                    type="submit" 
                    hasIcon 
                    fill={COLORS.black}
                >
                    {t('Send')}
                </Button>
            </StyledInputContainer>
        </StyledForm>
    )
}