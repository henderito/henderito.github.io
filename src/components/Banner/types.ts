import { ReactNode } from "react";

export interface IBannerProps {
    image: string;
    columns: number;
    children: ReactNode;
}

export interface IBannerTitleProps {
    title: string;
}

export interface IBannerTagsProps {
    tags: string[];
}

export interface IBannerColumnProps {
    columnDirection: 'space-between' | 'flex-end' | 'flex-start' | 'space-evenly';
    children: ReactNode;
}

export interface IBannerDescriptionProps {
    description: string;
    tags: string[];
}

export interface IBannerContainerProps {
    image: string;
    children: ReactNode;
}

export interface IBannerGridProps {
    columns: number;
    children: ReactNode;
}