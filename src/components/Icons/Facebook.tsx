'use client'

import { COLORS } from "@/global/theme"
import React, { FC } from "react"

export const Facebook: FC<{ fill?: string, height?: number, width?: number }> = ({ fill = COLORS.black, height = 16, width = 16 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width} height={height}>
            <path fill="none" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} d="M26,45V29h-3v-5h3v-3c0-4,2-7,6-7c2.903,0,5,1,5,1v4h-2c-2.145,0-3,0.504-3,2v3h5l-1,5h-4v16"/>
            <path fill="none" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" d="M9,45h32c2.209,0,4-1.791,4-4V9c0-2.209-1.791-4-4-4H9C6.791,5,5,6.791,5,9v32C5,43.209,6.791,45,9,45z"/>
        </svg>
    )
}