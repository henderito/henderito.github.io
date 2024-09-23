import { ReactNode } from "react";

export interface IInputProps {
    type: string;
    value?: string;
    name: string;
    label: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    setRef?: ((ref: HTMLInputElement | null) => void) | undefined;
}

export interface IInputContainerProps {
    focused: boolean | number;
    error: string | null;
    children: ReactNode;
}