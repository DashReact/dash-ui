

export interface TransformProps {
    transform?: string;
    rotate?: string;
    rotateX?: string;
    rotateY?: string;
    rotateZ?: string;
    scale?: string;
    scaleX?: string;
    scaleY?: string;
    scaleZ?: string;
    skew?: string;
    skewX?: string;
    skewY?: string;
    translate?: string;
    translateX?: string;
    translateY?: string;
    translateZ?: string;
}

export const transforms = (props: TransformProps): string => {
    const { transform, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, skew, skewX, skewY, translate, translateX, translateY, translateZ } = props;
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