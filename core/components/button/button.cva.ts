// src/utils/cva.js
import { cva } from 'class-variance-authority';

export const buttonStyles = cva('button', {
  variants: {
    size: {
      small: 'button-small',
      medium: "button-medium",
      large: 'button-large',
      xlarge: "button-xlarge"
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
