import { Theme } from "theme";

export const HEADER_HEIGHT = 6
export const HEADER_ROOM_PADDING = HEADER_HEIGHT + 1;
export const HOME_COLUMN_PADDING = 12;
export const BORDER_RADIUS = 48;
export const FORM_BORDER_RADIUS = 16;

export const BREAKPOINTS: Theme.Breakpoints = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES: Theme.Query = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const COLORS: Theme.Color = {
  // primary: "hsl(240deg 100% 60%)",
  primary: 'hsl(327, 85%, 48%)', // #E41286
  secondary: '',
  yellow: '#EEB81D', //#EEB81D  hsl(44, 86%, 52%)
  blue: '#2BABE2', //#2BABE2   'hsl(198, 76%, 53%)'
  primaryLight: "hsl(235 100% 62%)",
  white: "hsl(0, 0%, 100%)",
  offwhite: "hsl(0, 0%, 86%)",
  gray: "#DCDCDC", //#313136
  black: "hsl(0 0% 0%)",
  transparent: "rgba(0,0,0,0)",
  grayGradient: "linear-gradient(to bottom, rgba(0,0,0, 0.3) 80%, rgba(0,0,0,0) 100%)",
  overlay: "linear-gradient(90deg, rgba(0,0,0, 0.6) 0%, rgba(0,0,0,0.1) 70%)"
};

export const TEXT_SIZES: Theme.TextSize = {
  xs: {
    '--fontSize': '0.7rem'
  },
  sm: {
    '--fontSize': '1rem'
  },
  md: {
    '--fontSize': '1.2rem'
  },
  lg: {
    '--fontSize': '1.5rem'
  },
  xl: {
    '--fontSize': '1.8rem'
  },
  '2xl': {
    '--fontSize': '2.4rem'
  },
  '3xl': {
    '--fontSize': '3.2rem'
  },
  '4xl': {
    '--fontSize': '4.4rem'
  }
}

export const TEXT_STYLES: Theme.TextStyle = {
  banner: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.white,
    "--fontStyle": "normal",
    "--fontWeight": '400',
  },
  title: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.white,
    "--fontStyle": 'normal',
    "--fontWeight": '700',
  },
  description: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.black,
    "--fontStyle": 'normal',
    "--fontWeight": '400',
  },
  black: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.black,
    "--fontStyle": 'normal',
    "--fontWeight": '700',
  },
  alternateDescription: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.white,
    "--fontStyle": 'italic',
    "--fontWeight": '400',
  },
  comment: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.primary,
    "--fontStyle": 'italic',
    "--fontWeight": '400',
  },
  alternatePink: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.primary,
    "--fontStyle": 'normal',
    "--fontWeight": '400',
  },
}

export const BUTTON_SIZES: Theme.ButtonSize = {
  base: {
    // "--borderRadius": {BORDER_RADIUS} + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "8px 24px",
    '--width': "auto",
    "--height": "40px"
  },
  small: {
    // "--borderRadius": {BORDER_RADIUS} + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "8px 24px",
    '--width': "240px",
    "--height": "50px"
  },
  medium: {
    // "--borderRadius": {BORDER_RADIUS} + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "14px 20px",
    '--width': "320px",
    "--height": "60px"
  },
  large: {
    // "--borderRadius": {BORDER_RADIUS} + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "18px 32px",
    '--width': "320px",
    "--height": "80px"
  },
};

export const BUTTON_STYLES: Theme.ButtonStyle = {
  base: {
    "--backgroundColor": COLORS.white,
    "--color": COLORS.black,
    "--focusOutline": COLORS.white,
    "--hoverBackground": COLORS.primary,
    "--hoverColor": COLORS.white,
    "--hoverOutline": COLORS.white,
    "--border": `2px solid ${COLORS.white}`,
    "--borderRadius": `${BORDER_RADIUS}px`,
    "--hoverBorder": `2px solid ${COLORS.primary}`,
    "--backgroundFill": 'none'
  },
  filled: {
    "--backgroundColor": COLORS.primary,
    "--color": COLORS.white,
    "--focusOutline": COLORS.white,
    "--hoverBackground": COLORS.blue,
    "--hoverColor": COLORS.white,
    "--hoverOutline": COLORS.blue,
    "--border": `2px solid ${COLORS.primary}`,
    "--borderRadius": `${BORDER_RADIUS}px`,
    "--hoverBorder": `2px solid ${COLORS.blue}`,
    "--backgroundFill": 'linear-gradient(90deg, hsl(198, 76%, 53%) 0%, hsl(198, 76%, 53%) 56%)'
  },
  alternateFilled: {
    "--backgroundColor": COLORS.white,
    "--color": COLORS.black,
    "--focusOutline": COLORS.white,
    "--hoverBackground": COLORS.primary,
    "--hoverColor": COLORS.white,
    "--hoverOutline": COLORS.white,
    "--border": `2px solid ${COLORS.primary}`,
    "--borderRadius": `${BORDER_RADIUS}px`,
    "--hoverBorder": `2px solid ${COLORS.primary}`,
    "--backgroundFill": 'none'
  },
  ghost: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.white,
    "--focusOutline": COLORS.white,
    "--hoverBackground": COLORS.white,
    "--hoverColor": COLORS.black,
    "--hoverOutline": COLORS.white,
    "--border": `2px solid ${COLORS.white}`,
    "--borderRadius": `${BORDER_RADIUS}px`,
    "--hoverBorder": `2px solid ${COLORS.white}`,
    "--backgroundFill": `linear-gradient(90deg, rgba(228,18,134,0.8) 0%, rgba(228,18,134,0.8) 56%)`
  },
  alternateGhost: {
    "--backgroundColor": COLORS.white,
    "--color": COLORS.black,
    "--focusOutline": COLORS.white,
    "--hoverBackground": COLORS.primary,
    "--hoverColor": COLORS.white,
    "--hoverOutline": COLORS.white,
    "--border": 'none',
    "--borderRadius": '',
    "--hoverBorder": 'none',
    "--backgroundFill": 'none'
  },
  outlined: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.black,
    "--focusOutline": COLORS.black,
    "--hoverBackground": COLORS.black,
    "--hoverColor": COLORS.white,
    "--hoverOutline": COLORS.white,
    "--border": `2px solid ${COLORS.black}`,
    "--borderRadius": `${BORDER_RADIUS}px`,
    "--hoverBorder": `2px solid ${COLORS.black}`,
    "--backgroundFill": 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 56%)'
  },
  alternateOutlined: {
    "--backgroundColor": COLORS.transparent,
    "--color": COLORS.white,
    "--focusOutline": COLORS.white,
    "--hoverBackground": COLORS.primary,
    "--hoverColor": COLORS.white,
    "--hoverOutline": COLORS.white,
    "--border": `2px solid ${COLORS.white}`,
    "--borderRadius": `${BORDER_RADIUS}px`,
    "--hoverBorder": `2px solid ${COLORS.primary}`,
    "--backgroundFill": `linear-gradient(90deg, rgba(228,18,134,0.8) 0%, rgba(228,18,134,0.8) 56%)`
  }
};