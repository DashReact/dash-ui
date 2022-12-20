
export interface PseudoElementsProps {
    before?: string;
    after?: string;
}
// TODO: Add support for pseudo-elements
export const pseudoElements = (props: PseudoElementsProps): string => {
    const { before, after } = props;
    return `
        ${before ? `&::before { ${before} }` : ''}
        ${after ? `&::after { ${after} }` : ''}
    `;
}