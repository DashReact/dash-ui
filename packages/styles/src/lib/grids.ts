import { addPx } from "./utils";

export interface GridProps {
    grid?: string | number;
    gridArea?: string | number;
    gridAutoColumns?: string | number;
    gridAutoFlow?: string | number;
    gridAutoRows?: string | number;
    gridColumn?: string | number;
    gridColumnEnd?: string | number;
    gridColumnGap?: string | number;
    gridColumnStart?: string | number;
    gridGap?: string | number;
    gridRow?: string | number;
    gridRowEnd?: string | number;
    gridRowGap?: string | number;
    gridRowStart?: string | number;
    gridTemplate?: string | number;
    gridTemplateAreas?: string | number;
    gridTemplateColumns?: string | number;
    gridTemplateRows?: string | number;
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