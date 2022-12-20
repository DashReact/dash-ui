import { defineStyleConfig } from '@dash-ui-lib/styles';

export interface ButtonProps {
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const Button = defineStyleConfig({
  type: 'button',
   // The styles all button have in common
   baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    round: 5, 
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
