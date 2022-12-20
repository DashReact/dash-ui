import { ElementProps } from "./interfaces";
import { addPx } from "./utils";


export interface LayoutProps {
    display?: ElementProps
    center?: boolean;
    w?: ElementProps;
    h?: ElementProps;
    minWidth?: ElementProps;
    minHeight?: ElementProps;
    maxWidth?: ElementProps;
    maxHeight?: ElementProps;
    overflow?: ElementProps;
    overflowX?: ElementProps;
    overflowY?: ElementProps;
    verticalAlign?: ElementProps;
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