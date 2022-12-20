import { ElementProps } from "./interfaces";
import { addPx } from "./utils";

export interface GridProps {
    grid?: ElementProps;
    gridArea?: ElementProps;
    gridAutoColumns?: ElementProps;
    gridAutoFlow?: ElementProps;
    gridAutoRows?: ElementProps;
    gridColumn?: ElementProps;
    gridColumnEnd?: ElementProps;
    gridColumnGap?: ElementProps;
    gridColumnStart?: ElementProps;
    gridGap?: ElementProps;
    gridRow?: ElementProps;
    gridRowEnd?: ElementProps;
    gridRowGap?: ElementProps;
    gridRowStart?: ElementProps;
    gridTemplate?: ElementProps;
    gridTemplateAreas?: ElementProps;
    gridTemplateColumns?: ElementProps;
    gridTemplateRows?: ElementProps;
}

export const grid = (props: GridProps): string => {
    const {
        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnGap,
        gridColumnStart,
        gridGap,
        gridRow,
        gridRowEnd,
        gridRowGap,
        gridRowStart,
        gridTemplate,
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
    } = addPx(props);

    return `
        ${grid ? `grid: ${grid};` : ''}
        ${gridArea ? `grid-area: ${gridArea};` : ''}
        ${gridAutoColumns ? `grid-auto-columns: ${gridAutoColumns};` : ''}
        ${gridAutoFlow ? `grid-auto-flow: ${gridAutoFlow};` : ''}
        ${gridAutoRows ? `grid-auto-rows: ${gridAutoRows};` : ''}
        ${gridColumn ? `grid-column: ${gridColumn};` : ''}
        ${gridColumnEnd ? `grid-column-end: ${gridColumnEnd};` : ''}
        ${gridColumnGap ? `grid-column-gap: ${gridColumnGap};` : ''}
        ${gridColumnStart ? `grid-column-start: ${gridColumnStart};` : ''}
        ${gridGap ? `grid-gap: ${gridGap};` : ''}
        ${gridRow ? `grid-row: ${gridRow};` : ''}
        ${gridRowEnd ? `grid-row-end: ${gridRowEnd};` : ''}
        ${gridRowGap ? `grid-row-gap: ${gridRowGap};` : ''}
        ${gridRowStart ? `grid-row-start: ${gridRowStart};` : ''}
        ${gridTemplate ? `grid-template: ${gridTemplate};` : ''}
        ${gridTemplateAreas ? `grid-template-areas: ${gridTemplateAreas};` : ''}
        ${gridTemplateColumns ? `grid-template-columns: ${gridTemplateColumns};` : ''}
        ${gridTemplateRows ? `grid-template-rows: ${gridTemplateRows};` : ''}
    `;
}