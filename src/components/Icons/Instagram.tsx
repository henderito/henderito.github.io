'use client'

import { COLORS } from "@/global/theme"
import React, { FC } from "react"

export const Instagram: FC<{ fill?: string, height?: number, width?: number }> = ({ fill = COLORS.black, height = 16, width = 16 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={width} height={height}>
            <path fill="none" stroke={fill} strokeWidth={2} strokeMiterlimit={10} d="M7.546,25h10.909C22.07,25,25,22.07,25,18.454V7.545C25,3.93,22.07,1,18.454,1H7.545C3.93,1,1,3.93,1,7.546v10.909C1,22.07,3.93,25,7.546,25z"/>
            <circle fill="none" stroke={fill} strokeWidth={2} strokeMiterlimit={10} cx="13" cy="13" r="6"/>
            <circle cx="20.5" cy="5.5" r="1.5"/>
        </svg>
    )
}