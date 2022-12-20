export interface MarginProps {
    m?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    mx?: string | number;
    my?: string | number;
}


export const margin = (props: MarginProps): string => {
    const { m, mt, mr, mb, ml, mx, my } = props;

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
