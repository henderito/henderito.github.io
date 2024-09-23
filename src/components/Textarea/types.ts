import { ReactNode } from "react";

export interface ITextareaProps {
    rows: number;
    value?: string;
    name: string;
    label: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    setRef?: ((ref: HTMLInputElement | null) => void) | undefined;
}

export interface IStyledTextareaProps {
    focused: boolean | number;
    error: string | null;
    children: ReactNode;
}