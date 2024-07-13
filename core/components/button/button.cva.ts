// src/utils/cva.js
import { cva } from 'class-variance-authority';

export const buttonStyles = cva('button', {
  variants: {
    size: {
      small: 'button-small',
      large: 'button-large',
    },
    variant: {
      primary: 'button-primary',
      secondary: 'button-secondary',
    },
  },
  defaultVariants: {
    size: 'large',
    variant: 'primary',
  },
});
