export interface Theme {
    colors: Colors,
    spacing: Sizes,
    fontSizes: Sizes,
    fontWeights: FontWeights,
    breackPoints: BreackPoints,
    [key: string]: string | number | Colors | Sizes | FontWeights | BreackPoints
}

export interface FontWeights {
    normal: string | number,
    medium: string | number,
    bold: string | number,
    [key: string]: string | number
}

export interface BreackPoints {
    sm: string | number,
    md: string | number,
    lg: string | number,
    xl: string | number,
    [key: string]: string | number
}

export interface Sizes {
    xs: string | number,
    sm: string | number,
    md: string | number,
    lg: string | number,
    xl: string | number,
    '2xl': string | number,
    '3xl': string | number,
    '4xl': string | number,
    '5xl': string | number,
    '6xl': string | number,
    '7xl': string | number,
    '8xl': string | number,
    '9xl': string | number,
    [key: string]: string | number
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
    [key: string]: ColorsScales
}

export interface ColorsScales {
    50: string | number,
    100: string | number,
    200: string | number,
    300: string | number,
    400: string | number,
    500: string | number,
    600: string | number,
    700: string | number,
    800: string | number,
    900: string | number,
}