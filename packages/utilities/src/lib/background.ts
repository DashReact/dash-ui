
export interface BackgroundProps {
    bg?: string;
    bgImage?: string;
    bgSize?: string;
    bgPosition?: string;
    bgRepeat?: string;
    bgAttachment?: string;
}

export const background = (props: BackgroundProps): string => {
    const { bg, bgImage, bgSize, bgPosition, bgRepeat, bgAttachment } = props;
    return `
        ${bg ? `background-color: ${bg};` : ''}
        ${bgImage ? `background-image: url(${bgImage});` : ''}
        ${bgSize ? `background-size: ${bgSize};` : ''}
        ${bgPosition ? `background-position: ${bgPosition};` : ''}
        ${bgRepeat ? `background-repeat: ${bgRepeat};` : ''}
        ${bgAttachment ? `background-attachment: ${bgAttachment};` : ''}
    `;
}