
export interface TextsProps {
    color?: string;
    textAlign?: string;
    textTransform?: string;
    textShadow?: string;
    textOverflow?: string;
    textDecoration?: string;
    textIndent?: string;
    textJustify?: string;
    textEmphasis?: string;
    textUnderlinePosition?: string;
    textOrientation?: string;
}

export const texts = (props: TextsProps): string => {
    const {
        color,
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
    } = props;
    return `
        ${color ? `color: ${color};` : ''}
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
