import { DashElementProps, dashStyles } from './dash-element';
import { addPx } from './utils';

// TODO: Add all pseudo classes
export interface PseudoClassesProps {
    hover?: DashElementProps;
    focus?: DashElementProps;
    active?: DashElementProps;
    visited?: DashElementProps;
    disabled?: DashElementProps;
    checked?: DashElementProps;
    selected?: DashElementProps;
    invalid?: DashElementProps;
    valid?: DashElementProps;
    indeterminate?: DashElementProps;
    placeholder?: DashElementProps;
    readOnly?: DashElementProps;
    readWrite?: DashElementProps;
    required?: DashElementProps;
    optional?: DashElementProps;
    empty?: DashElementProps;
    inRange?: DashElementProps;
    outOfRange?: DashElementProps;
    default?: DashElementProps;
    first?: DashElementProps;
    firstOfType?: DashElementProps;
    last?: DashElementProps;
    lastOfType?: DashElementProps;
    onlyOfType?: DashElementProps;
    onlyChild?: DashElementProps;
    link?: DashElementProps;
    target?: DashElementProps;
    root?: DashElementProps;
    scope?: DashElementProps;
    enabled?: DashElementProps;
}

export const pseudoClasses = (props: PseudoClassesProps): string => {
    const {
        hover,
        focus,
        active,
        visited,
        disabled,
        checked,
        selected,
        invalid,
        valid,
        indeterminate,
        placeholder,
        readOnly,
        readWrite,
        required,
        optional,
        empty,
        inRange,
        outOfRange,
        default: defaultProp,
        first,
        firstOfType,
        last,
        lastOfType,
        onlyOfType,
        onlyChild,
        link,
        target,
        root,
        scope,
        enabled,
    } = addPx(props);
    return `
        ${hover ? `&:hover { ${dashStyles({ ...hover, theme: props.theme })}` : ''}
        ${focus ? `&:focus { ${focus} }` : ''}
        ${active ? `&:active { ${active} }` : ''}
        ${visited ? `&:visited { ${visited} }` : ''}
        ${disabled ? `&:disabled { ${disabled} }` : ''}
        ${checked ? `&:checked { ${checked} }` : ''}
        ${selected ? `&:selected { ${selected} }` : ''}
        ${invalid ? `&:invalid { ${invalid} }` : ''}
        ${valid ? `&:valid { ${valid} }` : ''}
        ${indeterminate ? `&:indeterminate { ${indeterminate} }` : ''}
        ${placeholder ? `&:placeholder { ${placeholder} }` : ''}
        ${readOnly ? `&:readOnly { ${readOnly} }` : ''}
        ${readWrite ? `&:readWrite { ${readWrite} }` : ''}
        ${required ? `&:required { ${required} }` : ''}
        ${optional ? `&:optional { ${optional} }` : ''}
        ${empty ? `&:empty { ${empty} }` : ''}
        ${inRange ? `&:inRange { ${inRange} }` : ''}
        ${outOfRange ? `&:outOfRange { ${outOfRange} }` : ''}
        ${defaultProp ? `&:default { ${defaultProp} }` : ''}
        ${first ? `&:first { ${first} }` : ''}
        ${firstOfType ? `&:firstOfType { ${firstOfType} }` : ''}
        ${last ? `&:last { ${last} }` : ''}
        ${lastOfType ? `&:lastOfType { ${lastOfType} }` : ''}
        ${onlyOfType ? `&:onlyOfType { ${onlyOfType} }` : ''}
        ${onlyChild ? `&:onlyChild { ${onlyChild} }` : ''}
        ${link ? `&:link { ${link} }` : ''}
        ${target ? `&:target { ${target} }` : ''}
        ${root ? `&:root { ${root} }` : ''}
        ${scope ? `&:scope { ${scope} }` : ''}
        ${enabled ? `&:enabled { ${enabled} }` : ''}
    `;
};