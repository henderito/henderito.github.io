export interface ITileProps {
    title: string;
    image: string;
    tags: string[];
    description: string;
    columns?: number;
    buttonLabel?: string;
    onClick?: () => void;
}