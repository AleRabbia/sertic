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
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white',
    secondary: 'border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-white',
    ghost: 'hover:bg-white/10 text-gray-300 hover:text-white'
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