import { addPx } from "./utils";


export interface ColorsProps {
    color?: string | number;
    borderColor?: string | number;
}

export const colors = (props: ColorsProps): string => {
    const { color, borderColor } = addPx(props);
    return `
        ${color ? `color: ${color};` : ''}
        ${borderColor ? `border-color: ${borderColor};` : ''}
    `;
}