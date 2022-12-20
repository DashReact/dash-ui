import { addPx } from "./utils";


export interface FontProps {
    fontFamily?: string | number;
    fontSize?: string | number | number;
    fontWeight?: string | number | number;
    lineHeight?: string | number | number;
    letterSpacing?: string | number | number;
    textAlign?: string | number;
    fontStyle?: string | number;
    textTransform?: string | number;
    textDecoration?: string | number;
    textOverflow?: string | number;
    whiteSpace?: string | number;
    wordBreak?: string | number;
    wordWrap?: string | number;
    overflowWrap?: string | number;
    textShadow?: string | number;
    textRendering?: string | number;
    fontVariant?: string | number;
    fontFeatureSettings?: string | number;
    fontKerning?: string | number;
    fontOpticalSizing?: string | number;
    fontSmoothing?: string | number;
}

export const font = (props: FontProps): string => {
    const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textTransform, textDecoration, textOverflow, whiteSpace, wordBreak, wordWrap, overflowWrap, textShadow, textRendering, fontVariant, fontFeatureSettings, fontKerning, fontOpticalSizing, fontSmoothing } = addPx(props);
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