import { addPx } from "./utils";

export interface PaddingProps {
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  px?: string | number;
  py?: string | number;
}


export const padding = (props: PaddingProps): string => {
  const { p, pt, pr, pb, pl, px, py } = addPx(props);

  // Check if the values exist and return the correct css
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
