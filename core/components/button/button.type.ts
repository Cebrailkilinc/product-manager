import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'small' | "medium" | 'large' | "xlarge";
    variant?: 'primary' | 'secondary';
    className?: string;
  }
  
  