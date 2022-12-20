

export interface AnimationProps {
    animation?: string;
    animationDelay?: string;
    animationDirection?: string;
    animationDuration?: string;
    animationFillMode?: string;
    animationIterationCount?: string;
    animationName?: string;
    animationPlayState?: string;
    animationTimingFunction?: string;
}

export const animations = (props: AnimationProps): string => {
    const { animation, animationDelay, animationDirection, animationDuration, animationFillMode, animationIterationCount, animationName, animationPlayState, animationTimingFunction } = props;
    return `
        ${animation ? `animation: ${animation};` : ''}
        ${animationDelay ? `animation-delay: ${animationDelay};` : ''}
        ${animationDirection ? `animation-direction: ${animationDirection};` : ''}
        ${animationDuration ? `animation-duration: ${animationDuration};` : ''}
        ${animationFillMode ? `animation-fill-mode: ${animationFillMode};` : ''}
        ${animationIterationCount ? `animation-iteration-count: ${animationIterationCount};` : ''}
        ${animationName ? `animation-name: ${animationName};` : ''}
        ${animationPlayState ? `animation-play-state: ${animationPlayState};` : ''}
        ${animationTimingFunction ? `animation-timing-function: ${animationTimingFunction};` : ''}
    `;
}