import { addPx } from "./utils";

export interface PositionProps {
    position?: string;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
    zIndex?: string | number;
}

export const position = (props: PositionProps): string => {
    const { position, top, right, bottom, left, zIndex } = addPx(props);

    return `
    ${position ? `position: ${position};` : ''}
    ${top ? `top: ${top};` : ''}
    ${right ? `right: ${right};` : ''}
    ${bottom ? `bottom: ${bottom};` : ''}
    ${left ? `left: ${left};` : ''}
    ${zIndex ? `z-index: ${zIndex};` : ''}
    `;
}