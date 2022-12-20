import { addPx } from "./utils";
import { ElementProps } from "./interfaces";


export interface PaddingProps {
  p?: ElementProps;
  pt?: ElementProps;
  pr?: ElementProps;
  pb?: ElementProps;
  pl?: ElementProps;
  px?: ElementProps;
  py?: ElementProps;
}


export const padding = (props: PaddingProps): string => {
  const { p, pt, pr, pb, pl, px, py } = addPx(props);

  return `
  ${p ? `padding: ${p};` : ''}
  ${pt ? `padding-top: ${pt};` : ''}
  ${pr ? `padding-right: ${pr};` : ''}
  ${pb ? `padding-bottom: ${pb};` : ''}
  ${pl ? `padding-left: ${pl};` : ''}
  ${px ? `padding-right: ${px}; padding-left: ${px};` : ''}
  ${py ? `padding-top: ${py}; padding-bottom: ${py};` : ''}
  `;

};
