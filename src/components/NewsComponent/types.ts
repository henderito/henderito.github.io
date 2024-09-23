import { ReactNode } from "react";

export interface INewsComponentProps {
    title: string;
    newsText: string;
    author: string;
    date: string;
    children: ReactNode;
}