

export interface FontProps {
    fontFamily?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    lineHeight?: string | number;
    letterSpacing?: string | number;
    textAlign?: string;
    fontStyle?: string;
    textTransform?: string;
    textDecoration?: string;
    textOverflow?: string;
    whiteSpace?: string;
    wordBreak?: string;
    wordWrap?: string;
    overflowWrap?: string;
    textShadow?: string;
    textRendering?: string;
    fontVariant?: string;
    fontFeatureSettings?: string;
    fontKerning?: string;
    fontOpticalSizing?: string;
    fontSmoothing?: string;
}

export const font = (props: FontProps): string => {
    const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textTransform, textDecoration, textOverflow, whiteSpace, wordBreak, wordWrap, overflowWrap, textShadow, textRendering, fontVariant, fontFeatureSettings, fontKerning, fontOpticalSizing, fontSmoothing } = props;
    return `
        ${fontFamily ? `font-family: ${fontFamily};` : ''}
        ${fontSize ? `font-size: ${fontSize};` : ''}
        ${fontWeight ? `font-weight: ${fontWeight};` : ''}
        ${lineHeight ? `line-height: ${lineHeight};` : ''}
        ${letterSpacing ? `letter-spacing: ${letterSpacing};` : ''}
        ${textAlign ? `text-align: ${textAlign};` : ''}
        ${fontStyle ? `font-style: ${fontStyle};` : ''}
        ${textTransform ? `text-transform: ${textTransform};` : ''}
        ${textDecoration ? `text-decoration: ${textDecoration};` : ''}
        ${textOverflow ? `text-overflow: ${textOverflow};` : ''}
        ${whiteSpace ? `white-space: ${whiteSpace};` : ''}
        ${wordBreak ? `word-break: ${wordBreak};` : ''}
        ${wordWrap ? `word-wrap: ${wordWrap};` : ''}
        ${overflowWrap ? `overflow-wrap: ${overflowWrap};` : ''}
        ${textShadow ? `text-shadow: ${textShadow};` : ''}
        ${textRendering ? `text-rendering: ${textRendering};` : ''}
        ${fontVariant ? `font-variant: ${fontVariant};` : ''}
        ${fontFeatureSettings ? `font-feature-settings: ${fontFeatureSettings};` : ''}
        ${fontKerning ? `font-kerning: ${fontKerning};` : ''}
        ${fontOpticalSizing ? `font-optical-sizing: ${fontOpticalSizing};` : ''}
        ${fontSmoothing ? `font-smoothing: ${fontSmoothing};` : ''}
    `;
};