// src/utils/cva.ts
import { cva } from 'class-variance-authority';

export const modalStyles = cva('modal', {
  variants: {
    size: {
      small: 'modal-small',
      medium: 'modal-medium',
      large: 'modal-large',
      xlarge: 'modal-xlarge'
    },
    variant: {
      info: 'modal-info',
      warning: 'modal-warning',
      success: 'modal-success',
      error: 'modal-error'
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'info',
  },
});
