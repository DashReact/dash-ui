import { ElementProps } from "./interfaces";
import { addPx } from "./utils";


export interface TransformProps {
    transform?: ElementProps;
    rotate?: ElementProps;
    rotateX?: ElementProps;
    rotateY?: ElementProps;
    rotateZ?: ElementProps;
    scale?: ElementProps;
    scaleX?: ElementProps;
    scaleY?: ElementProps;
    scaleZ?: ElementProps;
    skew?: ElementProps;
    skewX?: ElementProps;
    skewY?: ElementProps;
    translate?: ElementProps;
    translateX?: ElementProps;
    translateY?: ElementProps;
    translateZ?: ElementProps;
}

export const transforms = (props: TransformProps): string => {
    const { transform, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, skew, skewX, skewY, translate, translateX, translateY, translateZ } = addPx(props);
    return `
        ${transform ? `transform: ${transform};` : ''}
        ${rotate ? `rotate: ${rotate};` : ''}
        ${rotateX ? `rotateX: ${rotateX};` : ''}
        ${rotateY ? `rotateY: ${rotateY};` : ''}
        ${rotateZ ? `rotateZ: ${rotateZ};` : ''}
        ${scale ? `scale: ${scale};` : ''}
        ${scaleX ? `scaleX: ${scaleX};` : ''}
        ${scaleY ? `scaleY: ${scaleY};` : ''}
        ${scaleZ ? `scaleZ: ${scaleZ};` : ''}
        ${skew ? `skew: ${skew};` : ''}
        ${skewX ? `skewX: ${skewX};` : ''}
        ${skewY ? `skewY: ${skewY};` : ''}
        ${translate ? `translate: ${translate};` : ''}
        ${translateX ? `translateX: ${translateX};` : ''}
        ${translateY ? `translateY: ${translateY};` : ''}
        ${translateZ ? `translateZ: ${translateZ};` : ''}
    `;

}