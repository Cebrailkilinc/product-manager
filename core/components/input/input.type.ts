// src/core/components/input/input.type.ts
import { InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { inputStyles } from './input.cva';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | "medium" | 'large' | "xlarge";
  variant?: 'primary' | 'secondary';
}
