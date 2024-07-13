// src/modules/product/button.cva.ts
import { cva } from 'class-variance-authority';

export const gridStyles = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
    gap: {
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
    },
  },
  defaultVariants: {
    columns: 2,
    gap: 'medium',
  },
});
