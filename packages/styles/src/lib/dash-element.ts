// Inerface for all elements
import { AnimationProps } from './animations';
import { BackgroundProps } from './background';
import { BordersProps } from './borders';
import { BreackPointsProps } from './breackpoints';
import { ColorsProps } from './colors';
import { FlexboxProps } from './flexbox';
import { FontProps } from './fonts';
import { GridProps } from './grids';
import { LayoutProps } from './layouts';
import { MarginProps } from './margins';
import { PaddingProps } from './paddings';
import { PositionProps } from './positions';
import { ShadowsProps } from './shadows';
import { TextsProps } from './texts';
import { TransformProps } from './transforms';
import { TransitionProps } from './transitions';
import { CursorProps } from './cursors';
import { PseudoClassesProps } from './pseudo-classes';


// Function for all elements
import { animations } from './animations';
import { background } from './background';
import { borders } from './borders';
import { breackPoints } from './breackpoints';
import { colors } from './colors';
import { flexbox } from './flexbox';
import { font } from './fonts';
import { grid } from './grids';
import { layout } from './layouts';
import { margin } from './margins';
import { padding } from './paddings';
import { position } from './positions';
import { shadows } from './shadows';
import { texts } from './texts';
import { transforms } from './transforms';
import { transitions } from './transitions';
import { cursor } from './cursors';

import { pseudoClasses } from './pseudo-classes';

export interface DashElementProps extends
    MarginProps, PaddingProps, BreackPointsProps,
    AnimationProps,
    BackgroundProps,
    BordersProps,
    ColorsProps,
    FlexboxProps,
    FontProps,
    GridProps,
    PositionProps,
    LayoutProps,
    ShadowsProps,
    TextsProps,
    TransformProps,
    TransitionProps, PseudoClassesProps, CursorProps { }


export const dashStyles = (props: DashElementProps): string => {

    return `
    ${animations(props)}
    ${background(props)}
    ${borders(props)}
    ${breackPoints(props)}
    ${colors(props)}
    ${flexbox(props)}
    ${font(props)}
    ${grid(props)}
    ${layout(props)}
    ${margin(props)}
    ${padding(props)}
    ${position(props)}
    ${shadows(props)}
    ${texts(props)}
    ${transforms(props)}
    ${transitions(props)}
    ${pseudoClasses(props)}
    ${cursor(props)}
    `;
}