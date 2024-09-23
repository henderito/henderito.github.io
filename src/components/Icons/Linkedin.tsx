'use client'

import { COLORS } from "@/global/theme"
import React, { FC } from "react"

export const Linkedin: FC<{ fill?: string, height?: number, width?: number }> = ({ fill = COLORS.black, height = 16, width = 16 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width} height={height}>
            <path fill="none" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" d="M9,45h32c2.209,0,4-1.791,4-4V9c0-2.209-1.791-4-4-4H9C6.791,5,5,6.791,5,9v32C5,43.209,6.791,45,9,45z"/>
            <polygon fill="none" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" points="11,20 17,20 17,33.135 17,39 11,39 "/>
            <path fill="none" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" d="M14,17L14,17c-1.8,0-3-1.133-3-2.533S12.2,12,14,12s2.925,1.067,3,2.467C17,15.867,15.875,17,14,17z"/>
            <path fill="none" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" d="M39,39h-6c0,0,0-9.257,0-10c0-2-1-4-3.5-4.043C27.022,24.913,26,27,26,29c0,0.909,0,10,0,10h-6V20h6v2.561c0,0,1.93-2.561,5.813-2.561C35.778,20,39,22.726,39,28.261V39z"/>
        </svg>
    )
}