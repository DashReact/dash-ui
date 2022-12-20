import { ElementProps } from "./interfaces";
import { addPx } from "./utils";

export interface FlexboxProps {
    flex?: ElementProps;
    flexDirection?: ElementProps;
    flexWrap?: ElementProps;
    justifyContent?: ElementProps;
    alignItems?: ElementProps;
    alignContent?: ElementProps;
    order?: ElementProps;
    flexGrow?: ElementProps;
    flexShrink?: ElementProps;
    flexBasis?: ElementProps;
    alignSelf?: ElementProps;
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