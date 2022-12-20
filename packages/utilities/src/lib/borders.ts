
export interface BordersProps {
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
    borderStyle?: string;
    borderColor?: string;
    borderWidth?: string;
}

export const borders = (props: BordersProps): string => {
    const { border, borderTop, borderRight, borderBottom, borderLeft, borderRadius, borderStyle, borderColor, borderWidth } = props;
    return `
        ${border ? `border: ${border};` : ''}
        ${borderTop ? `border-top: ${borderTop};` : ''}
        ${borderRight ? `border-right: ${borderRight};` : ''}
        ${borderBottom ? `border-bottom: ${borderBottom};` : ''}
        ${borderLeft ? `border-left: ${borderLeft};` : ''}
        ${borderRadius ? `border-radius: ${borderRadius};` : ''}
        ${borderStyle ? `border-style: ${borderStyle};` : ''}
        ${borderColor ? `border-color: ${borderColor};` : ''}
        ${borderWidth ? `border-width: ${borderWidth};` : ''}
    `;
}