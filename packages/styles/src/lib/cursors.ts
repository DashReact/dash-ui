import { addPx } from "./utils";
import { ElementProps } from "./interfaces";


export interface CursorProps {
    cursor?: ElementProps;
}

export const cursor = (props: CursorProps): string => {
    const { cursor } = addPx(props);
    return `
        cursor: ${cursor};
    `;
}