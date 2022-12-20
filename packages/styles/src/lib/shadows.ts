import { ElementProps } from "./interfaces";
import { addPx } from "./utils";


export interface ShadowsProps {
    textShadow?: ElementProps;
    boxShadow?: ElementProps;
}

export const shadows = (props: ShadowsProps): string => {
    const { textShadow, boxShadow } = addPx(props);
    return `
        ${textShadow ? `text-shadow: ${textShadow};` : ''}
        ${boxShadow ? `box-shadow: ${boxShadow};` : ''}
    `;
}