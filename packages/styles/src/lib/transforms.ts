import { addPx } from "./utils";


export interface TransformProps {
    transform?: string | number;
    rotate?: string | number;
    rotateX?: string | number;
    rotateY?: string | number;
    rotateZ?: string | number;
    scale?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    scaleZ?: string | number;
    skew?: string | number;
    skewX?: string | number;
    skewY?: string | number;
    translate?: string | number;
    translateX?: string | number;
    translateY?: string | number;
    translateZ?: string | number;
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