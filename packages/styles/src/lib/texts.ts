import { ElementProps } from "./interfaces";
import { addPx } from "./utils";

export interface TextsProps {
    textColor?: ElementProps;
    textAlign?: ElementProps;
    textTransform?: ElementProps;
    textShadow?: ElementProps;
    textOverflow?: ElementProps;
    textDecoration?: ElementProps;
    textIndent?: ElementProps;
    textJustify?: ElementProps;
    textEmphasis?: ElementProps;
    textUnderlinePosition?: ElementProps;
    textOrientation?: ElementProps;
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
