import React from 'react';
import clsx from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 font-medium rounded-md tracking-wide transition-colors duration-200 ease-in-out';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-pucp-blue-dark text-white hover:bg-pucp-blue-light shadow-sm',
    secondary: 'bg-pucp-gray-light text-pucp-blue-dark hover:bg-gray-200 shadow-sm',
    outline: 'border border-pucp-blue-dark text-pucp-blue-dark hover:bg-pucp-blue-dark hover:text-white',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}