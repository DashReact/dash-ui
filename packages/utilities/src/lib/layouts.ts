

export interface LayoutProps {
    display?: string;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    overflow?: string;
    overflowX?: string;
    overflowY?: string;
    verticalAlign?: string;
}

export const layout = (props: LayoutProps): string => {
    const { display, width, height, minWidth, minHeight, maxWidth, maxHeight, overflow, overflowX, overflowY, verticalAlign } = props;

    return `
        ${display ? `display: ${display};` : ''}
        ${width ? `width: ${width};` : ''}
        ${height ? `height: ${height};` : ''}
        ${minWidth ? `min-width: ${minWidth};` : ''}
        ${minHeight ? `min-height: ${minHeight};` : ''}
        ${maxWidth ? `max-width: ${maxWidth};` : ''}
        ${maxHeight ? `max-height: ${maxHeight};` : ''}
        ${overflow ? `overflow: ${overflow};` : ''}
        ${overflowX ? `overflow-x: ${overflowX};` : ''}
        ${overflowY ? `overflow-y: ${overflowY};` : ''}
        ${verticalAlign ? `vertical-align: ${verticalAlign};` : ''}
    `;
}