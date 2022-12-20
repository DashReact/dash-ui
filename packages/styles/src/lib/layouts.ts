import { addPx } from "./utils";


export interface LayoutProps {
    display?: string | number
    center?: boolean;
    w?: string | number;
    h?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    overflow?: string | number;
    overflowX?: string | number;
    overflowY?: string | number;
    verticalAlign?: string | number;
}

export const layout = (props: LayoutProps): string => {
    const { display, w, center, h, minWidth, minHeight, maxWidth, maxHeight, overflow, overflowX, overflowY, verticalAlign } = addPx(props);

    return `
        ${center ? `margin: 0 auto;` : ''}
        ${display ? `display: ${display};` : ''}
        ${w ? `width: ${w};` : ''}
        ${h ? `height: ${h};` : ''}
        ${minWidth ? `min-w: ${minWidth};` : ''}
        ${minHeight ? `min-h: ${minHeight};` : ''}
        ${maxWidth ? `max-w: ${maxWidth};` : ''}
        ${maxHeight ? `max-h: ${maxHeight};` : ''}
        ${overflow ? `overflow: ${overflow};` : ''}
        ${overflowX ? `overflow-x: ${overflowX};` : ''}
        ${overflowY ? `overflow-y: ${overflowY};` : ''}
        ${verticalAlign ? `vertical-align: ${verticalAlign};` : ''}
    `;
}