// if property is number then add px
export const addPx = (props: any): any => {
    let pxProps = {};

    Object.keys(props).map((key) => {
        const value = props[key];
        if (typeof value === 'number') {
            pxProps[key] = `${value}px`;

        } else if (typeof value === 'function') {
            pxProps[key] = value(props)
        }
        else
            pxProps[key] = value;
    });
    return pxProps;
};
