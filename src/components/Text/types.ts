import { Theme } from "theme";

export interface ITextsProps {
    label: string;
    // variant: 'title' | 'description' | 'filled';
    variant: keyof Theme.TextStyle;
    // color?: Theme.Color;
    // backgroundColor?: Theme.Color;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    // bold?: boolean;
    align?: 'start' | 'center' | 'end;'
}