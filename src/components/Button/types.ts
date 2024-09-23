import { ReactNode } from "react";

export interface IButtonProps {
    variant: 'base' | 'filled' | 'alternateFilled' | 'outlined' | 'alternateOutlined' | 'ghost' | 'alternateGhost';
    size: 'base' | 'small' | 'medium' | 'large';
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit'
    // shape: 'rounded' | 'bordered' | 'phantom';
    hasIcon?: boolean;
    fill?: string;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}