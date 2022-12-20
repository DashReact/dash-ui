import { addPx } from "./utils";

export interface TextsProps {
    textColor?: string | number;
    textAlign?: string | number;
    textTransform?: string | number;
    textShadow?: string | number;
    textOverflow?: string | number;
    textDecoration?: string | number;
    textIndent?: string | number;
    textJustify?: string | number;
    textEmphasis?: string | number;
    textUnderlinePosition?: string | number;
    textOrientation?: string | number;
}

export const texts = (props: TextsProps): string => {
    const {
        textColor,
        textAlign,
        textTransform,
        textShadow,
        textOverflow,
        textDecoration,
        textIndent,
        textJustify,
        textEmphasis,
        textUnderlinePosition,
        textOrientation,
    } = addPx(props);
    return `
        ${textColor ? `color: ${textColor};` : ''}
        ${textAlign ? `text-align: ${textAlign};` : ''}
        ${textTransform ? `text-transform: ${textTransform};` : ''}
        ${textShadow ? `text-shadow: ${textShadow};` : ''}
        ${textOverflow ? `text-overflow: ${textOverflow};` : ''}
        ${textDecoration ? `text-decoration: ${textDecoration};` : ''}
        ${textIndent ? `text-indent: ${textIndent};` : ''}
        ${textJustify ? `text-justify: ${textJustify};` : ''}
        ${textEmphasis ? `text-emphasis: ${textEmphasis};` : ''}
        ${textUnderlinePosition ? `text-underline-position: ${textUnderlinePosition};` : ''}
        ${textOrientation ? `text-orientation: ${textOrientation};` : ''}
    `;
}
