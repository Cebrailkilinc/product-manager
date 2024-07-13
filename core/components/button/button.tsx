import React, { ReactNode } from 'react';
import "@/core/components/button/button.scss";
import { buttonStyles } from './button.cva';
import { cn } from "@/packages/utils/cn";
import { ButtonProps } from './button.type';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ size, variant }), className)}
      {...props}
    >
      {props.children}
    </button>
  )
);

Button.displayName = 'Button';

export { Button };
