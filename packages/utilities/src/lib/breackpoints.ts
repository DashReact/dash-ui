import { dashElement, DashElementProps } from './dash-element';
import { Theme } from '@dash-ui-lib/theme';

export interface BreackPointsProps {
    sm?: DashElementProps;
    md?: DashElementProps;
    lg?: DashElementProps;
    xl?: DashElementProps;
    theme?: Theme;
}

export const breackPoints = (props: BreackPointsProps): string => {
    const { sm, md, lg, xl } = props;

    return `
    ${sm ? `@media (min-width: ${props.theme?.breackPoints.sm}) {${dashElement(sm)}}` : ''}
    ${md ? `@media (min-width: ${props.theme?.breackPoints.md}) {${dashElement(md)}}` : ''}
    ${lg ? `@media (min-width: ${props.theme?.breackPoints.lg}) {${dashElement(lg)}}` : ''}
    ${xl ? `@media (min-width: ${props.theme?.breackPoints.xl}) {${dashElement(xl)}}` : ''}
    `;
}
