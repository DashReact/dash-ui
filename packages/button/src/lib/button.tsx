import { defineStyleConfig } from '@dash-ui-lib/styles';

export const Button = defineStyleConfig({
  type: 'button',
  baseStyle: {
    round: 5,
    b: 'none',
    p: (props) => props.theme.spacing.md,
    m: 0,
    bg: (props) => props.theme.colors.primary[300],
    textColor: (props) => props.theme.colors.white[900],
    hover: {
      bg: (props) => props.theme.colors.primary[800],
      cursor: 'pointer',
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
});
