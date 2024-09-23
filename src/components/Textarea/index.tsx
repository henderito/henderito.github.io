'use client'

import React, { FC, useState } from "react"
import { IStyledTextareaProps, ITextareaProps } from "./types"
import { styled } from "styled-components"
import { COLORS } from "@/global/theme"

const StyledTextarea: FC<IStyledTextareaProps> = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 30px;

  & > textarea {
    border: 1px solid ${props => props.error ? '#e77674' : '#eee'};
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
    color: ${COLORS.primary};
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props => props.focused && `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }
`

export const TextArea: FC<ITextareaProps> = ({ 
    label,
    name,
    onChange,
    rows,
    onBlur,
    setRef,
    value,
    onFocus, 
    ...rest }) => {
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState<string | null>(null)

    const handleOnFocus = () => {
      setFocused(true)
      onFocus && onFocus()
    } 


  const handleOnBlur = () => {
    setFocused(false)
    onBlur && onBlur()
  }

  // const validateValue = (val: string) => {
  //   if (type === "email") {
  //     // VERY simple email validation
  //     if (val.indexOf("@") === -1) {
  //       setError("email is invalid")
  //     } else {
  //       setError(null)
  //     }
  // }

  const handleOnChange = (val: string) => {
    // validateValue(val)
    onChange(val)
  }

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{ error }</label>
      }

      return <label>{ label }</label>      
    }
    return null
  }

    return (
        <StyledTextarea focused={focused} error={error}>
          { renderLabel() }
          <textarea 
            rows={rows}
            value={value}
            onChange={e => handleOnChange(e.target.value)}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={ref => setRef(ref)}
            {...rest}
          />
        </StyledTextarea>
    )
  }