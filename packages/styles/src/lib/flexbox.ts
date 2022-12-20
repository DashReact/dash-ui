import { addPx } from "./utils";

export interface FlexboxProps {
    flex?: string | number;
    flexDirection?: string | number;
    flexWrap?: string | number;
    justifyContent?: string | number;
    alignItems?: string | number;
    alignContent?: string | number;
    order?: string | number;
    flexGrow?: string | number;
    flexShrink?: string | number;
    flexBasis?: string | number;
    alignSelf?: string | number;
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
    } = addPx(props);

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