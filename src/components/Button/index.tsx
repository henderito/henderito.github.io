'use client'

import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { IButtonProps } from "./types";
import { BUTTON_SIZES, BUTTON_STYLES, COLORS } from "@/global/theme";
import { ChevronRight } from "../Icons/ChevronRight";

const ButtonBase: FC<{ 
      fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, 
      children: ReactNode,
      style: any,
      onClick: any }> = styled.button`
  // General styling
  font-size: var(--fontSize);
  font-weight: ${props => props.fontWeight};
  color: var(--color);
  cursor: pointer;

  width: 100%;
  min-width: 180px;
  padding: 8px 12px;
  display: flex;

  border-radius: var(--borderRadius);
  border: var(--border);
  background-color: var(--backgroundColor);
  background-image: var(--backgroundFill);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: .5s;

  &:focus {
    outline-color: var(--focusOutline);
    outline-offset: 4px;
  }

  &:hover {
    /* background-color: var(--hoverBackground); */
    color: var(--hoverColor);
    outline-color: var(--hoverOutline);
    border: var(--hoverBorder);
    background-size: 100% 100%;
    justify-content: space-between;
  }

  
  @media (max-width: 1500px) {
    max-width: 320px;
  }
  
  @media (max-width: 1100px) {
    max-width: none;
  }
  
  @media (max-width: 550px) {
    max-width: none;
  }
  // For mobile-devices recommended min tap height
  @media (pointer: coarse) {
    min-height: 44px;
  }
`;

const ChevronContainer = styled.div`
  padding-left: 2rem;
`

const Button: FC<IButtonProps> = ({ 
    variant, 
    size,
    children,
    onClick, 
    disabled, 
    fill, 
    hasIcon = false, 
    fontWeight = 400,
    ...rest 
  }) => {
  const buttonSize = BUTTON_SIZES[size];
  const buttonStyle = BUTTON_STYLES[variant];

  return <ButtonBase 
            style={{...buttonSize, ...buttonStyle}} 
            onClick={onClick} 
            aria-disabled={disabled}
            fontWeight={fontWeight}
            {...rest}
          >
            {children}
            {hasIcon && 
              <ChevronContainer>
                <ChevronRight fill={fill || COLORS.white} height={20} width={20} />
              </ChevronContainer>
            }
          </ButtonBase>;
};

export default Button;