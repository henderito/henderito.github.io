'use client'

import React, { FC } from "react";
import styled from "styled-components";
import { IButtonProps } from "./types";
import { BUTTON_SIZES, BUTTON_STYLES, COLORS } from "@/global/theme";
import { ChevronRight } from "../Icons/ChevronRight";

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: var(--border);
  color: var(--color);
  background-color: var(--backgroundColor);
  cursor: pointer;
  width: var(--width);
  height: var(--height);
  font-weight: ${props => props.fontWeight};

  display: flex;
  align-items: center;

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