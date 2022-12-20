import { ElementProps } from "./interfaces";
import { addPx } from "./utils";


export interface ColorsProps {
    color?: ElementProps;
    borderColor?: ElementProps;
}

export const colors = (props: ColorsProps): string => {
    const { color, borderColor } = addPx(props);
    return `
        ${color ? `color: ${color};` : ''}
        ${borderColor ? `border-color: ${borderColor};` : ''}
    `;
}