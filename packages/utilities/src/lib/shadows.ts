

export interface ShadowsProps {
    textShadow?: string;
    boxShadow?: string;
}

export const shadows = (props: ShadowsProps): string => {
    const { textShadow, boxShadow } = props;
    return `
        ${textShadow ? `text-shadow: ${textShadow};` : ''}
        ${boxShadow ? `box-shadow: ${boxShadow};` : ''}
    `;
}