import React, { forwardRef } from 'react';
import { inputStyles } from './input.cva';
import './input.scss';
import { InputProps } from './input.type';

const Input = forwardRef<HTMLInputElement, InputProps>(({ size = 'large', variant = 'primary', className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`${inputStyles({ size, variant })} ${className}`}
      {...props}
    />
  );
});

export { Input };
