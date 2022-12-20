
export interface FlexboxProps {
    flex?: string;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    alignContent?: string;
    order?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexBasis?: string;
    alignSelf?: string;
}

export const flexbox = (props: FlexboxProps): string => {
    const {
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flexGrow,
        flexShrink,
        flexBasis,
        alignSelf,
    } = props;

    return `
        ${flex ? `flex: ${flex};` : ''}
        ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
        ${flexWrap ? `flex-wrap: ${flexWrap};` : ''}
        ${justifyContent ? `justify-content: ${justifyContent};` : ''}
        ${alignItems ? `align-items: ${alignItems};` : ''}
        ${alignContent ? `align-content: ${alignContent};` : ''}
        ${order ? `order: ${order};` : ''}
        ${flexGrow ? `flex-grow: ${flexGrow};` : ''}
        ${flexShrink ? `flex-shrink: ${flexShrink};` : ''}
        ${flexBasis ? `flex-basis: ${flexBasis};` : ''}
        ${alignSelf ? `align-self: ${alignSelf};` : ''}
    `;
}