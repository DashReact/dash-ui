import { addPx } from "./utils";
import { ElementProps } from "./interfaces";


export interface AnimationProps {
    animation?: ElementProps;
    animationDelay?: ElementProps;
    animationDirection?: ElementProps;
    animationDuration?: ElementProps;
    animationFillMode?: ElementProps;
    animationIterationCount?: ElementProps;
    animationName?: ElementProps;
    animationPlayState?: ElementProps;
    animationTimingFunction?: ElementProps;
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