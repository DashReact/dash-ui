import { addPx } from "./utils";


export interface AnimationProps {
    animation?: string | number;
    animationDelay?: string | number;
    animationDirection?: string | number;
    animationDuration?: string | number;
    animationFillMode?: string | number;
    animationIterationCount?: string | number;
    animationName?: string | number;
    animationPlayState?: string | number;
    animationTimingFunction?: string | number;
}

export const animations = (props: AnimationProps): string => {

    const { animation, animationDelay, animationDirection, animationDuration, animationFillMode, animationIterationCount, animationName, animationPlayState, animationTimingFunction } = addPx(props);


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