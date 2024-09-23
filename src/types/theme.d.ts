declare module "theme" {
    declare namespace Theme {
        interface Breakpoints {
            tabletMin: number;
            laptopMin: number;
            desktopMin: number;
        }

        interface Query {
            tabletAndUp: string;
            laptopAndUp: string;
            desktopAndUp: string;
        }

        interface Color {
            primary: string;
            secondary: string;
            yellow: string;
            blue: string;
            primaryLight: string;
            white: string;
            offwhite: string;
            gray: string;
            black: string;
            transparent: string;
            grayGradient: string;
            overlay: string;
        }

        interface TextSize {
            xs: {
                '--fontSize': string | number;
            };
            sm: {
                '--fontSize': string | number;
            };
            md: {
                '--fontSize': string | number;
            };
            lg: {
                '--fontSize': string | number;
            };
            xl: {
                '--fontSize': string | number;
            };
            '2xl': {
                '--fontSize': string | number;
            };
            '3xl': {
                '--fontSize': string | number;
            };
            '4xl': {
                '--fontSize': string | number;
            };
        }

        interface TextStyle {
            banner: { 
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
            title: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
            alternateDescription: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
            description: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
            comment: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
            alternatePink: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
            black: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                '--fontWeight': '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
                '--fontStyle': 'italic' | 'normal';
            };
        }

        interface ButtonSize {
            base: {
                "--fontSize": string;
                "--padding": string;
                "--width": string;
                "--height": string;
            };
            small: {
                "--fontSize": string;
                "--padding": string;
                "--width": string;
                "--height": string;
            };
            medium: {
                "--fontSize": string;
                "--padding": string;
                "--width": string;
                "--height": string;
            };
            large: {
                "--fontSize": string;
                "--padding": string;
                "--width": string;
                "--height": string;
            }
        }

        interface ButtonStyle {
            base: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
            filled: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
            alternateFilled: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
            outlined: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
            alternateOutlined: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
            ghost: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
            alternateGhost: {
                '--color': keyof typeof Color;
                '--backgroundColor': keyof typeof Color;
                // '--border': any;
                '--focusOutline': keyof typeof Color;
                '--hoverOutline': keyof typeof Color;
                '--hoverBackground': keyof typeof Color;
                '--hoverColor': keyof typeof Color;
                "--borderRadius": string;
                '--border': string;
                '--hoverBorder': string;
                '--backgroundFill': string;
            };
        }
    }
}