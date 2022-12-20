import { addPx } from "./utils";


export interface ShadowsProps {
    textShadow?: string | number;
    boxShadow?: string | number;
}

export const shadows = (props: ShadowsProps): string => {
    const { textShadow, boxShadow } = addPx(props);
    return `
        ${textShadow ? `text-shadow: ${textShadow};` : ''}
        ${boxShadow ? `box-shadow: ${boxShadow};` : ''}
    `;
}