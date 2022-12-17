export interface Theme {
    colors: Colors,
    spacing: Sizes,
    fontSizes: Sizes,
    fontWeights: FontWeights,
    breackPoints: ScreenSizes,
}

export interface FontWeights {
    normal: string,
    medium: string,
    bold: string,
}

export interface ScreenSizes {
    sm: string,
    md: string,
    lg: string,
    xl: string,
    '2xl': string,
    [key: string]: string
}

export interface Sizes {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    '2xl': string,
    '3xl': string,
    '4xl': string,
    '5xl': string,
    '6xl': string,
    '7xl': string,
    '8xl': string,
    '9xl': string,
    [key: string]: string
}

export interface Colors {
    primary: ColorsScales,
    white: ColorsScales,
    black: ColorsScales,
    gray: ColorsScales,
    red: ColorsScales,
    orange: ColorsScales,
    yelow: ColorsScales,
    green: ColorsScales,
    teal: ColorsScales,
    blue: ColorsScales,
    cyan: ColorsScales,
    purple: ColorsScales,
    pink: ColorsScales,
}

export interface ColorsScales {
    50: string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
}