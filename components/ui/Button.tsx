import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asChild = false,
  ...props
}) => {
  const baseStyles = 'font-heading font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-accent-sky text-white hover:bg-accent-sky-dark focus:ring-accent-sky shadow-md hover:shadow-lg font-semibold',
    secondary: 'bg-accent-lavender text-white hover:bg-accent-lavender-dark focus:ring-accent-lavender shadow-md hover:shadow-lg font-semibold',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (asChild && 'href' in props) {
    return (
      <Link href={props.href as string} className={combinedClassName} {...(props as any)}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

