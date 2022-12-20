import { addPx } from "./utils";

export interface BackgroundProps {
    bg?: string | number;
    bgImage?: string | number;
    bgSize?: string | number;
    bgPosition?: string | number;
    bgRepeat?: string | number;
    bgAttachment?: string | number;
}

export const background = (props: BackgroundProps): string => {
    const { bg, bgImage, bgSize, bgPosition, bgRepeat, bgAttachment } = addPx(props);
    return `
        ${bg ? `background-color: ${bg};` : ''}
        ${bgImage ? `background-image: url(${bgImage});` : ''}
        ${bgSize ? `background-size: ${bgSize};` : ''}
        ${bgPosition ? `background-position: ${bgPosition};` : ''}
        ${bgRepeat ? `background-repeat: ${bgRepeat};` : ''}
        ${bgAttachment ? `background-attachment: ${bgAttachment};` : ''}
    `;
}