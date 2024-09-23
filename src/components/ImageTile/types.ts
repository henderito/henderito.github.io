import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ImageTileProps {
    image: string;
    title: string;
    description: string;
    buttonLabel: string;
    // onClick: () => void;
    url: string;
}

export interface IImageTileContainerProps {
    image: string;
    children: ReactNode;
}