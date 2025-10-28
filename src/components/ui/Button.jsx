import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 rounded-full';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan text-sertic-white',
    secondary: 'border border-sertic-cyan/50 hover:border-sertic-cyan hover:bg-sertic-cyan/10 text-sertic-white',
    ghost: 'hover:bg-sertic-white/10 text-sertic-gray hover:text-sertic-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4 ml-1" />}
    </button>
  );
};

export default Button;