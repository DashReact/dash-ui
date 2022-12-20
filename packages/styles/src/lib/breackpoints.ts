import { dashStyles, DashElementProps } from './dash-element';
import { Theme } from '@dash-ui-lib/theme';
import { addPx } from './utils';

export interface BreackPointsProps {
    sm?: DashElementProps;
    md?: DashElementProps;
    lg?: DashElementProps;
    xl?: DashElementProps;
    theme?: Theme;
}

export const breackPoints = (props: BreackPointsProps): string => {
    const { sm, md, lg, xl } = addPx(props);

    return `
    ${sm ? `@media (min-width: ${props.theme?.breackPoints.sm}) {${dashStyles(sm)}}` : ''}
    ${md ? `@media (min-width: ${props.theme?.breackPoints.md}) {${dashStyles(md)}}` : ''}
    ${lg ? `@media (min-width: ${props.theme?.breackPoints.lg}) {${dashStyles(lg)}}` : ''}
    ${xl ? `@media (min-width: ${props.theme?.breackPoints.xl}) {${dashStyles(xl)}}` : ''}
    `;
}
