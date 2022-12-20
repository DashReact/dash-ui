import { addPx } from "./utils";
import { ElementProps } from "./interfaces";

export interface TransitionProps {
    transition?: ElementProps;
    transitionDelay?: ElementProps;
    transitionDuration?: ElementProps;
    transitionProperty?: ElementProps;
    transitionTimingFunction?: ElementProps;
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