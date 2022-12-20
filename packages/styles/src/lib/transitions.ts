import { addPx } from "./utils";

export interface TransitionProps {
    transition?: string | number;
    transitionDelay?: string | number;
    transitionDuration?: string | number;
    transitionProperty?: string | number;
    transitionTimingFunction?: string | number;
}

export const transitions = (props: TransitionProps): string => {
    const { transition, transitionDelay, transitionDuration, transitionProperty, transitionTimingFunction } = addPx(props);
    return `
        ${transition ? `transition: ${transition};` : ''}
        ${transitionDelay ? `transition-delay: ${transitionDelay};` : ''}
        ${transitionDuration ? `transition-duration: ${transitionDuration};` : ''}
        ${transitionProperty ? `transition-property: ${transitionProperty};` : ''}
        ${transitionTimingFunction ? `transition-timing-function: ${transitionTimingFunction};` : ''}
    `;
}