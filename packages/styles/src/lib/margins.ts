import { ElementProps } from "./interfaces";
import { addPx } from "./utils";

export interface MarginProps {
    m?: ElementProps;
    mt?: ElementProps;
    mr?: ElementProps;
    mb?: ElementProps;
    ml?: ElementProps;
    mx?: ElementProps;
    my?: ElementProps;
}


export const margin = (props: MarginProps): string => {
    const { m, mt, mr, mb, ml, mx, my } = addPx(props);

    // Check if the values exist and return the correct css
    return `
    ${m ? `margin: ${m};` : ''}
    ${mt ? `margin-top: ${mt};` : ''}
    ${mr ? `margin-right: ${mr};` : ''}
    ${mb ? `margin-bottom: ${mb};` : ''}
    ${ml ? `margin-left: ${ml};` : ''}
    ${mx ? `margin-right: ${mx}; margin-left: ${mx};` : ''}
    ${my ? `margin-top: ${my}; margin-bottom: ${my};` : ''}
    `;
};
