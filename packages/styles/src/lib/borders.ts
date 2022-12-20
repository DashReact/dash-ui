import { ElementProps } from "./interfaces";
import { addPx } from "./utils";

export interface BordersProps {
    b?: ElementProps;
    bt?: ElementProps;
    br?: ElementProps;
    bb?: ElementProps;
    bl?: ElementProps;
    round?: ElementProps;
    borderStyle?: ElementProps;
    bc?: ElementProps;
    bw?: ElementProps;
}

export const borders = (props: BordersProps): string => {
    const { b, bt, br, bb, bl, round, borderStyle, bc, bw } = addPx(props);
    return `
        ${b ? `border: ${b};` : ''}
        ${bt ? `border-top: ${bt};` : ''}
        ${br ? `border-right: ${br};` : ''}
        ${bb ? `border-bottom: ${bb};` : ''}
        ${bl ? `border-left: ${bl};` : ''}
        ${round ? `border-radius: ${round};` : ''}
        ${borderStyle ? `border-style: ${borderStyle};` : ''}
        ${bc ? `border-color: ${bc};` : ''}
        ${bw ? `border-width: ${bw};` : ''}
    `;
}