import { addPx } from "./utils";

export interface BordersProps {
    b?: string | number;
    bt?: string | number;
    br?: string | number;
    bb?: string | number;
    bl?: string | number;
    round?: string | number;
    borderStyle?: string | number;
    bc?: string | number;
    bw?: string | number;
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