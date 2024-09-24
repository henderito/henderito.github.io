'use client'

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { IInputContainerProps, IInputProps } from './types'
import { COLORS } from '@/global/theme'

const InputContainer: FC<IInputContainerProps> = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;

  & > input {
    border: 2px solid ${props => props.error ? '#e77674' : COLORS.black};
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
    color: ${COLORS.black};
    position: absolute;
    font-weight: bold;
    background-color: transparent;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props => props.focused && `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: ${COLORS.yellow};
      padding: 0 8px;
    `}
  }
`
/**
 * A Plaid-inspired custom input component
 * 
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
export const Input: FC<IInputProps> = ({
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOnFocus = (e: any) => {
    setFocused(true)
    onFocus && onFocus()
  }  

  const handleOnBlur = () => {
    setFocused(false)
    onBlur && onBlur()
  }

  const validateValue = (val: string) => {
    if (type === "email") {
      // VERY simple email validation
      if (val.indexOf("@") === -1) {
        setError("email is invalid")
      } else {
        setError(null)
      }
    }

    // ... any other validation you could think of
    // ... maybe even pass in an additional validation function as a prop?
  }

  const handleOnChange = (val: string) => {
    validateValue(val)
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

  const isFocused = focused || String(value).length || type === "date"

  return (
    <InputContainer focused={isFocused} error={error}>
      { renderLabel() }
      <input 
        value={value}
        type={type}
        onChange={e => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        // ref={ref => setRef(ref)}
        {...props}
      />
    </InputContainer>
  )
}
