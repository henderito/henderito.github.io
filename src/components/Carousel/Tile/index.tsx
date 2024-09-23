import React, { FC } from "react"
import { ITileProps } from "./types"
import Banner from "@/components/Banner"
import Button from "@/components/Button"

export const Tile: FC<ITileProps> = ({ description, image, tags, title, columns = 2, buttonLabel, onClick }) => {
    return (
        <Banner image={image} columns={columns}>
            <Banner.Column columnDirection="space-between">
                <Banner.Title title={title} />
                <Banner.Description description={description} tags={tags} />
            </Banner.Column>
            <Banner.Column columnDirection="flex-end">
               {buttonLabel && onClick && <Button size="small" variant="fill" onClick={onClick}>
                    {buttonLabel}
                </Button>}
            </Banner.Column>
        </Banner>
    )
}