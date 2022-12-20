

export interface ColorsProps {
    color?: string;
    bg?: string;
    borderColor?: string;
}

export const colors = (props: ColorsProps): string => {
    const { color, bg, borderColor } = props;
    return `
        ${color ? `color: ${color};` : ''}
        ${bg ? `background-color: ${bg};` : ''}
        ${borderColor ? `border-color: ${borderColor};` : ''}
    `;
}