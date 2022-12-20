import { DashElementProps, dashStyles } from "./dash-element";
import styled from "styled-components";

export interface DefineStyleConfigProps {
    type: string,
    baseStyle: DashElementProps,
    variants: { [key: string]: DashElementProps },
    sizes: { [key: string]: DashElementProps },
    defaultProps: {
        variant?: string,
        size?: string
    }
}

export const defineStyleConfig = (props: DefineStyleConfigProps) => {
    const { type, baseStyle, variants, sizes, defaultProps } = props;

    const StyledDashElement = styled[type]`
        ${dashStyles}
        ${dashStyles(baseStyle)}
        // get the variant styles
        ${props => {
            const variant = props.variant;
            if (variant && variants[variant]) {
                return dashStyles(variants[variant]);
            }
            return '';
        }}
        // get the size styles
        ${props => {
            const size = props.size;
            if (size && sizes[size]) {
                return dashStyles(sizes[size]);
            }
            return '';
        }}
        `

    StyledDashElement.defaultProps = defaultProps;

    return StyledDashElement;

}