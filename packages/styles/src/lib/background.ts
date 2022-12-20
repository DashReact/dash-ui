import { ElementProps } from "./interfaces";
import { addPx } from "./utils";

export interface BackgroundProps {
    bg?: ElementProps;
    bgImage?: ElementProps;
    bgSize?: ElementProps;
    bgPosition?: ElementProps;
    bgRepeat?: ElementProps;
    bgAttachment?: ElementProps;
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