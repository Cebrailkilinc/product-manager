// src/utils/cva.js
import { cva } from 'class-variance-authority';

export const inputStyles = cva('input', {
  variants: {
    size: {
      small: 'input-small',
      medium:"input-medium",
      large: 'input-large',
      xlarge: 'input-large',
    },
    variant: {
      primary: 'input-primary',
      secondary: 'input-secondary',
    },
  },
  defaultVariants: {
    size: 'large',
    variant: 'primary',
  },
});
