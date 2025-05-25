import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    className, 
    fullWidth = false,
    ...props 
  }, ref) => {
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm',
      accent: 'bg-accent-600 text-white hover:bg-accent-700 shadow-sm',
      outline: 'border border-steel-300 text-steel-700 hover:bg-steel-50 bg-white',
      ghost: 'text-steel-700 hover:bg-steel-100',
    };

    const sizes = {
      sm: 'py-1.5 px-3 text-sm',
      md: 'py-2 px-4 text-base',
      lg: 'py-2.5 px-5 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;