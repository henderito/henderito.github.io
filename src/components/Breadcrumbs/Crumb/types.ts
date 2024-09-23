import { ReactNode } from "react";

export interface ICrumbProps {
    href: string;
    isCurrentPage?: boolean;
    children: ReactNode
}