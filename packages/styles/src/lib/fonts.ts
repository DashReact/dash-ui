import { addPx } from "./utils";
import { ElementProps } from "./interfaces";


export interface FontProps {
    fontFamily?: ElementProps;
    fontFeatureSettings?: ElementProps;
    fontKerning?: ElementProps;
    fontOpticalSizing?: ElementProps;
    fontSize?: ElementProps;
    fontSmoothing?: ElementProps;
    fontStyle?: ElementProps;
    fontVariant?: ElementProps;
    fontWeight?: ElementProps;
    letterSpacing?: ElementProps;
    lineHeight?: ElementProps;
    overflowWrap?: ElementProps;
    textAlign?: ElementProps;
    textDecoration?: ElementProps;
    textOverflow?: ElementProps;
    textRendering?: ElementProps;
    textShadow?: ElementProps;
    textTransform?: ElementProps;
    whiteSpace?: ElementProps;
    wordBreak?: ElementProps;
    wordWrap?: ElementProps;
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