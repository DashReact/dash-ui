
export interface TransitionProps {
    transition?: string;
    transitionDelay?: string;
    transitionDuration?: string;
    transitionProperty?: string;
    transitionTimingFunction?: string;
}

export const transitions = (props: TransitionProps): string => {
    const { transition, transitionDelay, transitionDuration, transitionProperty, transitionTimingFunction } = props;
    return `
        ${transition ? `transition: ${transition};` : ''}
        ${transitionDelay ? `transition-delay: ${transitionDelay};` : ''}
        ${transitionDuration ? `transition-duration: ${transitionDuration};` : ''}
        ${transitionProperty ? `transition-property: ${transitionProperty};` : ''}
        ${transitionTimingFunction ? `transition-timing-function: ${transitionTimingFunction};` : ''}
    `;
}